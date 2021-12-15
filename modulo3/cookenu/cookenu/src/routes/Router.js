import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipePage/AddRecipePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipesPage from "../pages/RecipesPage/RecipesPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header"


function Router () {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/login">
                <LoginPage/>
            </Route>

            <Route exact path="/cadastro">
                <SignUpPage/>
            </Route>

            <Route exact path="/adicionar">
                <AddRecipePage/>
            </Route>

            <Route exact path="/">
                <RecipesPage/>
            </Route>

            <Route exact path="/detalhe/:id">
                <RecipeDetailPage/>
            </Route>
           
            <Route>
                <ErrorPage/>
            </Route>

        </Switch>   
        
        
        </BrowserRouter>

    )

}

export default Router;