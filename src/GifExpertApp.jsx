import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp =  () => {

    const [categories, setCategories] = useState(['Mushoku Tensei','Rick & Morty']);
    
    const onAddCategory = (category) => {

        if(categories.includes(category)) return;

        setCategories([...categories, category]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            { categories.map( (category) => (
                    <GifGrid key={ category } category={ category } />
                ))
            }

        </>
    )
}