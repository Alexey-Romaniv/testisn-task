import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardHeader, CardMedia, CardContent, Typography, CardActions, IconButton, Select, MenuItem, SelectChangeEvent  } from '@mui/material';
import {Recipe} from "../../types/userTypes";
import {logout} from "../../redux/auth/authOperations";

interface RecipeFilterProps {
    recipes: Recipe[];
    onFilterChange: (filteredRecipes: Recipe[]) => void;
}

const RecipeFilter: React.FC<RecipeFilterProps> = ({ recipes, onFilterChange }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortType, setSortType] = useState('');

    const filterAndSortRecipes = () => {
        let filteredRecipes = recipes.slice(); // Создаем копию массива recipes
        console.log("filteredRecipes "+filteredRecipes);

        if (searchQuery) {
            filteredRecipes = filteredRecipes.filter(
                (recipe) => recipe.title.includes(searchQuery) || recipe.description.includes(searchQuery)
            );
            console.log(" afteg:filteredRecipes: "+filteredRecipes)
        }

        if (sortType === 'name') {
            filteredRecipes.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortType === 'description') {
            filteredRecipes.sort((a, b) => a.description.localeCompare(b.description));
        }

        onFilterChange(filteredRecipes);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSortChange = (event: SelectChangeEvent<string>) => {
        setSortType(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Выполняется поиск:', searchQuery);
        console.log('Тип сортировки:', sortType);
        filterAndSortRecipes(); // Вызываем фильтрацию и сортировку после отправки формы
    };

    return (
        <form onSubmit={handleSearchSubmit}>
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Поиск..." />
            <Select value={sortType} onChange={handleSortChange}>
                <MenuItem value="">Сортировка</MenuItem>
                <MenuItem value="name">По названию</MenuItem>
                <MenuItem value="description">По описанию</MenuItem>
            </Select>
            <button type="submit">Найти</button>
        </form>
    );
};

export default RecipeFilter;