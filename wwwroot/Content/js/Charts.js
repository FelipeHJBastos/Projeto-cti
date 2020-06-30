var dataTemperatura = [
    {
        type: "indicator",
        mode: "gauge+number",
        value: 23,
        number: {suffix: "°C"},
        title: { text: "Temperatura", font: { size: 24 } },
        gauge: {
            axis: { visible: false, range: [0, 45], tickwidth: 1},
            bar: { color: "#80FF00" },
            borderwidth: 1,
            steps: [
                { range: [0, 18], color: "#FE2E2E" },
                { range: [18, 19], color: "#F7FE2E" },
                { range: [19, 24], color: "#2EFE2E" },
                { range: [24, 25], color: "#F7FE2E" },
                { range: [25, 45], color: "#FE2E2E" }
            ],
        }
    }
];

var layoutTemperatura = {
    width: 450,
    height: 300,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    font: { color: "black", family: "Arial" }
};


var dataUmidade = [
    {
        type: "indicator",
        mode: "gauge+number",
        value: 65,
        number: {suffix: "%"},
        title: { text: "Umidade", font: { size: 24 } },
        gauge: {
            axis: { visible: false, range: [0, 100], tickwidth: 1},
            bar: { color: "#80FF00" },
            borderwidth: 1,
            steps: [
                { range: [0, 58], color: "#FE2E2E" },
                { range: [58, 60], color: "#F7FE2E" },
                { range: [60, 70], color: "#2EFE2E" },
                { range: [70, 72], color: "#F7FE2E" },
                { range: [72, 100], color: "#FE2E2E" }
            ],
        }
    }
];

var layoutUmidade = {
    width: 450,
    height: 300,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    font: { color: "black", family: "Arial" }
};

