import React, { useEffect, useRef } from 'react';

const YandexMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (window.ymaps) {
            window.ymaps.ready(() => {
                const map = new window.ymaps.Map(mapRef.current, {
                    center: [43.2567, 76.9286],
                    zoom: 12,
                    controls: [], // Убираем все элементы управления
                });

                // Отключаем POI (точки интереса)
                map.behaviors.disable(['scrollZoom']); // Отключаем зум колесом (опционально)
                map.options.set('suppressMapOpenBlock', true); // Убираем кнопку "Открыть в Яндекс.Картах"
            });
        }
    }, []);

    return (
        <div ref={mapRef} style={{ width: '100%', height: '500px' }} />
    );
};

export default YandexMap;