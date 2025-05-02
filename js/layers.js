export const layers = [
    {
      id: 1,
      name: "タイトルテキスト",
      visible: true,
      locked: false,
      keyframes: {
        position: [
          { time: 0, x: 100, y: 200 },
          { time: 2, x: 400, y: 200 }
        ],
        opacity: [
          { time: 0, value: 0 },
          { time: 1, value: 1 }
        ]
        rotation: [ 
          { time: 0, angle: 0 }, { time: 2, angle: 90 } ],
        scale: [ 
          { time: 0, value: 1.0 }, { time: 2, value: 1.5 } ],
        color: [ 
          { time: 0, r: 255, g: 255, b: 255 }, { time: 2, r: 0, g: 255, b: 255 } ]
      }
    }
  ];
  