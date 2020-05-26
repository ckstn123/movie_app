import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
    {
        id:1,
        name : "kimchi",
        rating : 5
    },
    {
        id:2,
        name : "ramen",
        rating : 4.9
    },
    {
        id:3,
        name : "삽겹살",
        rating : 4.8
    },
    {
        id:4,
        name : "불고기",
        rating : 4.7
    }];

function renderFood(dish) {
    return <Food favourite={dish.name}/>
}
function Food({favourite, rating}) {

    return (
        <div>
            <h1>I love {favourite}</h1>
            <h4>{rating}/5.0</h4>
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number
};
function App() {
  return (
    <div className="App">
        {foodILike.map(dish => (
            <Food key = {dish.id} favourite = {dish.name + "♥"} rating = {dish.rating}/>)
        )}

    </div>
  );
}

export default App;
