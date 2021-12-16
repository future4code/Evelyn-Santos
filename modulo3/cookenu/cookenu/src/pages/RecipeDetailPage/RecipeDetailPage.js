import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

function RecipeDetailPage () {
    useProtectedPage()
    return (
        <div>
            <h1>RECIPE DETAIL</h1>
        </div>
    )

}

export default RecipeDetailPage;