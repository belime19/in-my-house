import React, { useState } from 'react'
import { Grid, Paper, Button, Typography, Select, TextareaAutosize } from '@material-ui/core'
import { addProperty } from '../services/proprieteService'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'
import { getItem } from '../services/LocalStorage'


const AddPropertyForm = () => {
   
    const paperStyle = { padding: '0 15px 40px 15px', width: 450, }
    const btnStyle = { marginTop: 10 }
    const textAreaStyle = {width: 450, height: 200}
    const userEmailFromLS = getItem('userEmail');
    const [property, setProperty] = useState ({
        emailProprietaire: userEmailFromLS ? userEmailFromLS:'',
        titre: '',
        typePropriete: '',
        surface: '',
        prixUnitaire: '',
        description:''
    })
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;
        setProperty(prevProperty => ({
                ...prevProperty,
                [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await addProperty(property);
          setIsSubmitted(true);
        } catch ({response}) {
          console.log(response);
          
        }
      }

    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>
            {
                (isSubmitted && (
                    <>
                    <p> Votre proriété à été ajoutée avec succès</p>
                    </>
                )) ||
                <>
                <Grid align='center'>
                    <Typography variant='caption'>Remplissez le formulaire pour créer une propriété</Typography>
                </Grid>
                <form  onSubmit={handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel >Titre</InputLabel>
                        <Input id="titre" onChange={onChange} name="titre" autoComplete="titre"  />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel id='typePropriete'>Type</InputLabel>
                        <Select
                            name='typePropriete'
                            labelId="typePropriete"
                            id="typePropriete"
                            label="Type"
                            onChange={onChange}
                        >
                            <MenuItem value='MAISON'>Maison</MenuItem>
                            <MenuItem value='APPARTEMENT'>Appartement</MenuItem>
                            <MenuItem value='PARKING'>Parking</MenuItem>
                            <MenuItem value='PISCINE'>Piscine</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel >Surface</InputLabel>
                        <Input id="surface" type="number" onChange={onChange} name="surface" autoComplete="surface"  />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel >Prix</InputLabel>
                        <Input id="prixUnitaire" type="number" onChange={onChange} name="prixUnitaire" autoComplete="prixUnitaire"  />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel >Ville</InputLabel>
                        <Input id="titre" onChange={onChange} name="ville" autoComplete="ville"  />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <TextareaAutosize placeholder='Description' labelId="description" id="description"  style={textAreaStyle} onChange={onChange} name="description" />
                    </FormControl>

                    <Button type='submit' style={btnStyle} variant='contained'color='primary'>
                        Enregistrer
                    </Button>
                 </form>
                </>

                }
            </Paper>
        </Grid>
    )
}
 
export default AddPropertyForm;