import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"

const cities = [
    {name:"Amieirinha",population:4812946},
    {name:"Kinshasa",population:1027499},
    {name:"Blantyre",population:1992831},
    {name:"Pueblo Nuevo Viñas",population:6106658},
    {name:"Ko Si Chang",population:1258350},
    {name:"Rabak",population:5611054},
    {name:"Port-Cartier",population:2014142},
    {name:"Detroit",population:8927289},
    {name:"Medeiros Neto",population:6847563},
    {name:"Kushchëvskaya",population:4160962}
]

const svgHeight = 400

d3.select('.bars')
    .selectAll('rect')
    .data(cities)
    .join('rect')
    .attr('width', 20)  //ancho barra
    .attr('height', d => d.population * 40e-6)  //altura población
    .attr('x', (d, i) => i * 35)  // separacion
    .attr('y', d => svgHeight - (d.population * 40e-6)) //crecer hacia arriba

d3.select('.labels')
    .selectAll('text')
    .data(cities)
    .join('text')
    .attr('x', (d, i) => i * 35 -30)
    .attr('y', svgHeight + 100)
    .attr('text-anchor', 'middle')
    .text(d => d.name)
    .attr('transform', (d, i) => `rotate(-45, ${i * 30 + 10}, ${svgHeight - 5})`) // girar ciudades
