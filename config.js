var config = {
    style: 'mapbox://styles/coxco96/cl0zqrb1j002i15l8tppyep3t',
    accessToken: 'pk.eyJ1IjoiY294Y285NiIsImEiOiJja3BrY2k0ZHgwa3Y0MnZwYTl3NWs4emJ5In0.ItwJEcRmF0LwO1DkHFgpZw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'A Gluten Free Guide to Lexington, KY',
    subtitle: "Let's navigate severe gluten sensitivities through a tour of Lexington.",
    byline: 'By Court Cox',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'What is gluten, anyway?',
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
            id: 'chapter-1a',
            alignment: 'left',
            hidden: false,
            title: 'Who needs to eat gluten free?',
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
        },
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: "The Wok",
            // image: 'images/target.svg',
            description: '[insert legend]',
            location: {
                center: [-84.529, 38.033],
                zoom: 14.75,
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
            id: 'chapter-7',
            alignment: 'left',
            hidden: false,
            title: "Archa Nine Thai Kitchen",
            // image: 'images/target.svg',
            description: '[insert legend]',
            location: {
                center: [-84.463, 38.008],
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
        },
        {
            id: 'chapter-8',
            alignment: 'left',
            hidden: false,
            title: "Josie's",
            // image: 'images/target.svg',
            description: '[insert legend]',
            location: {
                center: [-84.494, 38.027],
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
        },
        {
            id: 'chapter-9',
            alignment: 'left',
            hidden: false,
            title: "Blue Sushi Sake Grill",
            // image: 'images/target.svg',
            description: '[insert legend]',
            location: {
                center: [-84.531, 37.978],
                zoom: 14.5,
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
            id: 'chapter-10',
            alignment: 'left',
            hidden: false,
            title: "Malone's Landsdowne",
            // image: 'images/target.svg',
            description: '[insert legend]',
            location: {
                center: [-84.501, 37.994],
                zoom: 14.5,
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
            id: 'chapter-11',
            alignment: 'left',
            hidden: false,
            title: "Mellow Mushroom",
            // image: 'images/target.svg',
            description: '[insert legend]',
            location: {
                center: [-84.507, 38.041],
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
        },
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
        }
        
    ]
};
