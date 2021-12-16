import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

function AddRecipePage () {
    useProtectedPage()
    return (
        <div>
            <h1>ADD RECIPE</h1>
        </div>
    )

}

export default AddRecipePage;