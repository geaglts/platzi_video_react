import React from "react";
import "@styles/components/CarouselItem.scss";

const CarouselItem = () => {
    return (
        <div className="carousel-item">
            <img
                className="carousel-item__img"
                src="https://images.pexels.com/photos/4126133/pexels-photo-4126133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Persona en una terraza"
            />
            <div className="carousel-item__details--container">
                <div className="carousel-item__details">
                    <img src="assets/icons/play-icon.png" alt="Icono de play" />
                    <img src="assets/icons/plus-icon.png" alt="Icono de mas" />
                    <p className="carousel-item__details--title">
                        Título descriptivo
                    </p>
                    <p className="carousel-item__details--subtitle">
                        2019 16+ 114 minutos
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
