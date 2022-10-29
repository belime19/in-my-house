import React, { useState } from 'react'
import { Grid, Paper, Button, Typography, Select, TextareaAutosize } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { addProperty } from '../services/proprieteService'


const AddPropertyForm = () => {
   
    const paperStyle = { padding: '0 15px 40px 15px', width: 450, }
    const btnStyle = { marginTop: 10 }
    const textAreaStyle = {width: 450, height: 200}
    const initialValues = {
        titre: '',
        type: '',
        surface: '',
        prix: '',
        description:''
    }
    const [isSubmitted, setIsSubmitted] = useState(false);
    const onSubmit = async (values, props) => {
        const response = await addProperty(JSON.stringify(values));
        console.log(JSON.stringify(values));
        setIsSubmitted(true);
        alert(JSON.stringify(values), null, 2)
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
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {(props) => (
                        <Form noValidate>
                            <Field as={TextField} name="titre" label='Titre' fullWidth required />
                                
                            <Field as={Select} name='type' label='Type de propriété' fullWidth required >
                                    <option value="maison">Maison</option>
                                    <option value="appartement">Appartement</option>
                                    <option value="parking">Parking</option>
                                    <option value="piscine">Piscine </option>
                            </Field>

                            <Field as={TextField} name='surface' type='number' label='Surface' fullWidth required />

                            <Field as={TextField} name='prix' type='number' label='Prix unitaire' fullWidth required/>

                            <Field as={TextareaAutosize} name='description' label='Description' fullWidth style={textAreaStyle} required />

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='primary'>Enregistrer</Button>
                        </Form>
                    )}
                </Formik>
                </>

                }
            </Paper>
        </Grid>
    )
}
 
export default AddPropertyForm;