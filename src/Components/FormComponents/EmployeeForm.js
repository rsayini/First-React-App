import React from 'react';
import { FormGroup,Label, Input} from 'reactstrap';



class EmployeeForm extends React.Component {

    state = { 
        associateID: '55555',
    }

    componentDidMount(){
        // Do something when AddEditAssociate component is mounted
    }

    render() {
        return (
            <div>
                <FormGroup className="">
                    <Label for='lawSchoolID'>School Name</Label>
                    <Input id='lawSchoolID' placeholder="" />
                </FormGroup> 
                <FormGroup>
                    <Label for='lawSchoolID'>School Name</Label>
                    <Input id='lawSchoolID' placeholder="" />
                </FormGroup> 
                <FormGroup>
                    <Label for='lawSchoolID'>School Name</Label>
                    <Input id='lawSchoolID' placeholder="" />
                </FormGroup>
            </div>     
        );
    }
}

export default EmployeeForm;