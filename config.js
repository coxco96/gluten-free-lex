var config = {
    style: 'mapbox://styles/coxco96/cl0zqrb1j002i15l8tppyep3t',
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
                center: [-84.558, 38.038],
                zoom: 11.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    // layer: '2019fatalcount',
                    // opacity: 1,
                    // duration: 5000
                }
            ],
            onChapterExit: [
                {
                    // layer: '2019fatalcount',
                    // opacity: 0
                }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: '#1: Gluten Free Miracles',
            //image: './path/to/image/source.png',
            description: '[insert legend]',
            location: {
                center: [-84.519, 38.006],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gflexington',
                    opacity: 1,
                    //duration: 500
                }],
            onChapterExit: [
                {
                layer: 'gflexington',
                opacity: 1,
                //duration: 500
            }]
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: "Papi's Mexican Restaurant and Bar",
            // image: 'images/target.svg',
            description: '[insert legend]',
            location: {
                center: [-84.4925, 38.030],
                zoom: 18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gflexington',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'gflexington',
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: "Puccini's Smiling Teeth",
            // image: 'images/target.svg',
            description: '[insert legend]',
            location: {
                center: [-84.553, 37.981],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gflexington',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'gflexington',
                    opacity: 1
                }
            ]
        },
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            title: "Ted's Montana Grill",
            // image: 'images/target.svg',
            description: '[insert legend]',
            location: {
                center: [-84.426, 38.023],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'gflexington',
                    opacity: 1,
                    //duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'gflexington',
                    opacity: 1
                }
            ]
        }
        
    ]
};
