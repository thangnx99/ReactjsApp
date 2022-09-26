import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    // JSX => return block

    state = {

        arrJobs: [
            { id: 'abc Job1', title: 'Developers', salary: '500' },
            { id: 'abc Job2', title: 'Testers', salary: '400' },
            { id: 'abc Job3', title: 'Project managers', salary: '1000' },
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, (job)]
        })
    }

    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJobs
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>> run didupdate:', 'prev state :', prevState, 'current state:', this.state)
    }
    componentDidMount() {
        console.log('>> run component did mount')
    }
    render() {

        console.log('>>>>>>> call render:', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}

                />

                <ChildComponent

                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

            </>
        )
    }
}




export default MyComponent;