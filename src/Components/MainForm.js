import React from 'react';
import { Form, FormGroup,Label, Input} from 'reactstrap';
import EmployeeForm from './FormComponents/EmployeeForm';



class MainForm extends React.Component {

    state = { 
        associateID: '55555',
    }

    componentDidMount(){
        // Do something when AddEditAssociate component is mounted
    }

    render() {
        return (
            <Form>
                <EmployeeForm></EmployeeForm>
            </Form>
        );
    }
}

export default MainForm;