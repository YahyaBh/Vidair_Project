import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../../utils/Constant";

const Categories = ({ selectedCategory, SetSelectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
        }}
    >
        {categories.map((category) => (
            <button
                className="category-btn"
                onClick={() => SetSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && "#2a4589",
                    color: "white",
                }}
                key={category.name}
            >
                <span style={{ color: category.name === selectedCategory ? "white" : "#002c7c", marginRight: "15px" }}>
                    {category.icon}
                </span>
                <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
);

export default Categories;