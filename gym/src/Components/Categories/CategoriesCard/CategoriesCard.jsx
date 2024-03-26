import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesCard.css';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function CategoriesCard({ category }) {
    return (
        <div class="trialCard">
            <div className="trialCardImage">
              <Link exact to={`/Categories/${category.path}`}>
                  <img className="trialImage" src={category.imageUrl} alt={category.title} />
                  <div className="playIcon">
                    <span class="trialTitle">{category.title}</span>
                  </div>
              </Link>
            </div>
        </div>
    );
}

export default CategoriesCard;