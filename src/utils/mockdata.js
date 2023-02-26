const weatherImages = {
  cloud: "./Images/cloud.png",
  sun: "./Images/sun.png",
  rain: "./Images/rain.png",
  storm: "./Images/storm.png",
  sunny: "./Images/sunny.png",
};

export const cities = [
  {
    name: "Torino",
    temperature: 4,
    country: "Italy",
    weather: "cloudy",
    image: weatherImages.cloud,
  },
  {
    name: "Rome",
    temperature: 10,
    country: "Italy",
    weather: "clouds",
    image: weatherImages.cloud,
  },
  {
    name: "London",
    temperature: -2,
    country: "England",
    weather: "sun",
    image: weatherImages.sun,
  },
];

export const tabs = [
  {
    title: "week",
  },
  {
    title: "month",
  },
];

export const hours = [
  {
    temperature: 9,
    hour: "9 pm",
  },
  {
    temperature: 12,
    hour: "10 pm",
  },
  {
    temperature: 11,
    hour: "11 pm",
  },
  {
    temperature: 15,
    hour: "12 pm",
  },
  {
    temperature: 11,
    hour: "13 pm",
  },
  {
    temperature: 9,
    hour: "14 pm",
  },
  {
    temperature: 8,
    hour: "15 pm",
  },
  {
    temperature: 5,
    hour: "16 pm",
  },
  {
    temperature: 6,
    hour: "17 pm",
  },
  {
    temperature: 6,
    hour: "18 pm",
  },
];

export const days = [
  {
    day: "Monday",
    temperature: 5,
    image: weatherImages.cloud,
  },
  {
    day: "Tuesday",
    temperature: 3,
    image: weatherImages.rain,
  },
  {
    day: "Wednesday",
    temperature: 10,
    image: weatherImages.storm,
  },
  {
    day: "Thursday",
    temperature: 9,
    image: weatherImages.sun,
  },
  {
    day: "Friday",
    temperature: 14,
    image: weatherImages.sunny,
  },
  {
    day: "Saturday",
    temperature: 13,
    image: weatherImages.sunny,
  },
];

export const AggiungiCitta = [
  {
    city: "Turin",
    date: "Monday 15, March",
    hour: 12,
  },
];
