import React from "react"
import TestForm from "./TestForm";

export default class TestList extends React.Component {
    state = {
        todos: []
    }

    render() {
        return (
            <div>
                <TestForm />
            </div>
        )
    }
}
