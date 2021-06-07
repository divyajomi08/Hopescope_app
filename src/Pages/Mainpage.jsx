
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Tab } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';
import { Card,Message,Icon } from 'semantic-ui-react';

function Mainpage() {
  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
  const doctoroptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
  // const [selectedFile, setFile] = useState(null);
  // const onFileChange = (event) => {
  //   console.log(event.target.files[0]);
  //   setFile(event.target.files[0]);
  //   setUpload(null);
  // };

  const panes = [
    {
     
      menuItem: 'Home', render: () => <Tab.Pane>
        <div>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Name' placeholder='Name' />
              <Form.Input fluid label='Patient ID' placeholder='Patient ID' />
              <Form.Input fluid label='MRD Number' placeholder='MRD Number' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Select
                fluid
                label='Gender'
                options={options}
                placeholder='Gender'
              />
              <Form.Input fluid label='Age' placeholder='Age' />
              <Form.Select
                fluid
                label='Doctor'
                options={doctoroptions}
                placeholder='doctor'
                width={4}
              />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Input
                defaultValue='' placeholder='Image'
                width={6}
                type="file"
              />
            </Form.Group>
            <br></br>
            <Form.Button color='teal'>Submit</Form.Button>
            </Form>
            <Message attached='bottom' success style={{ marginTop : 5 }}>
              <Icon name='check circle outline' />
                Successfully uploaded.
            </Message>
         </div></Tab.Pane>
    },
    {
      menuItem: 'Result', render: () => <Tab.Pane>
        <div>
          <div>
            <Input fluid icon='search' placeholder='Search...' />
          </div>
          <Card color='teal' image={"https://upload.wikimedia.org/wikipedia/commons/3/37/Fundus_photograph_of_normal_right_eye.jpg"} />
          <Segment inverted color='green'>Negative</Segment>
          <Segment raised>The patient has no diabetic retinopathy.</Segment>
          <Segment raised>The prescriptions by the doctor.</Segment>
        </div>
      </Tab.Pane>
    },
    {
      menuItem: 'Administration', render: () => <Tab.Pane>
        <div>
          <Segment.Group raised>
            <Form style={{ padding: 10 }}>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Name' placeholder='Name' />
                <Form.Input fluid label='Doctor ID' placeholder='Doctor ID' />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Email' placeholder='Age' />
                <Form.Input fluid label='Password' placeholder='PassworD' />
              </Form.Group>
              <Form.Button color='teal'>Add</Form.Button>
            </Form>
          </Segment.Group>
          <Segment.Group raised>
            <Form style={{ padding: 10 }}>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Name' placeholder='Name' />
                <Form.Input fluid label='Doctor ID' placeholder='Doctor ID' width={6} />
              </Form.Group>
              <Form.Button color='teal'>Remove</Form.Button>
            </Form>
          </Segment.Group>
        </div></Tab.Pane>
    },
  ]
  return(
    <Tab panes={panes} />
  );
};

export default Mainpage;