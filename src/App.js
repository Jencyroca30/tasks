import React, {useState} from "react";
import Layout from "./Components/Layout";
import "./App.scss";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Card from "./Components/Card";


const App = () => {

    const[tasks, setTaks]=useState([])

    const [newTask, setNewTask] = useState(
        {
            title: '',
            description:  '' 
        }
    )

    const deleteTask = (tasksIndex) =>{
      console.log('holis')
      const tempTasks=[...tasks]
      tempTasks.splice(tasksIndex, 1);
      setTaks(tempTasks);
    }

  return (
    <Layout>
      <Container maxWidth="sm" className="main">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className="form">
              <form noValidate autoComplete="off">
              <Grid item xs={12}>
                 <TextField id="title"
                 label="Title" 
                 name="title"
                 value={newTask.title}
                 onChange={ (e)=> {
                    setNewTask({...newTask, title: e.target.value})

                }}
                 />
              </Grid>
              <Grid item xs={12}>
              <TextField id="description"
                 label="Description" 
                 name="description"
                 value={newTask.description}
                 onChange={ (e)=> {
                     console.log(e)
                     setNewTask({...newTask, description: e.target.value})


                 }}
                 />
                 
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" 
                onClick={()=> {
                    if( newTask.title===''|| newTask.description===''){
                        return; 
                    }
                    setTaks([...tasks, newTask]) 
                    setNewTask({
                        title:'', 
                        description: ''
                    }
                    )
                } 
                }>Add</Button>
                <Button variant="outlined" color="secondary">Cancel</Button>
              </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
            {
                tasks.map((tasks,key)=>(
                    <Grid item xs={12} sm={6} md={4}  key={key}>
                         {/* <Paper className='taskPaper'>
                         <h1>{tasks.title}</h1>
                         <p>{tasks.description}</p>
                          <DeleteIcon className='delete' onClick={()=>deleteTask(key)}/>
                         </Paper> */}
                         <Card 
                            index={key}
                            title={tasks.title} 
                            description={tasks.description} 
                            deleteTask={deleteTask}
                            img={"https://picsum.photos/202/100"}
                            />
                    </Grid>
                ))
            } 
        </Grid>
      </Container>
    </Layout>
  );
};
export default App;
