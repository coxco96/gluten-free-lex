var config = {
    style: 'mapbox://styles/coxco96/cl06z4zdr001315m10mmbho82',
    accessToken: 'pk.eyJ1IjoiY294Y285NiIsImEiOiJja3BrY2k0ZHgwa3Y0MnZwYTl3NWs4emJ5In0.ItwJEcRmF0LwO1DkHFgpZw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Gluten Free Lexington',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Court Cox',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Lexington only has one dedicated gluten-free kitchen.',
            // image: 'images/target.svg',
            description: "[insert legend here]",
            location: {
                center: [-86.136, 38.118],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2019fatalcount',
                    opacity: 1,
                    // duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: '2019fatalcount',
                    opacity: 0
                }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: '2020 Fatal Overdoses (Raw Count)',
            //image: './path/to/image/source.png',
            description: '[insert legend]',
            location: {
                // center: [-85.706, 38.188], // jefferson zoom in
                // zoom: 8.5, // jefferson zoom in
                center: [-86.136, 38.118],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2020fatalcount',
                    opacity: 1,
                    duration: 500
                }],
            onChapterExit: [
                {
                layer: '2020fatalcount',
                opacity: 0,
                duration: 500
            }]
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: '2019 Fatal Overdoses (Rate)',
            // image: 'images/target.svg',
            description: '[insert legend]',
            location: {
                center: [-84.836, 37.818],
                zoom: 7.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '2019fatalrate',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: '2019fatalrate',
                    opacity: 0
                }
            ]
        }
        
    ]
};
