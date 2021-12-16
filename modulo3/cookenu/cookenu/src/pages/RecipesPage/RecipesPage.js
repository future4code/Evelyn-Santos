import React from "react";
import {Button} from "@material-ui/core"
import useProtectedPage from "../../hooks/useProtectedPage"

function RecipePage () {
    useProtectedPage()
    return (
        <div>
            <h1>RECIPE LIST </h1>

        </div>
    )

}

export default RecipePage;