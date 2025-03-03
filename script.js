// Initial data structure
let contentDatabase = {
    movies: [
        {
            id: 'movie1',
            title: 'Inception',
            poster: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
            driveId: '1kKkxnptp43Cr6r1F9Qwei2SC20x2kRFu',
            type: 'movie'
        },
        {
            id: 'movie1',
            title: 'Inception',
            poster: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
            driveId: '1kKkxnptp43Cr6r1F9Qwei2SC20x2kRFu',
            type: 'movie'
        },
        {
            id: 'movie1',
            title: 'Inception',
            poster: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
            driveId: '1kKkxnptp43Cr6r1F9Qwei2SC20x2kRFu',
            type: 'movie'
        },
        {
            id: 'movie1',
            title: 'Inception',
            poster: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
            driveId: '1kKkxnptp43Cr6r1F9Qwei2SC20x2kRFu',
            type: 'movie'
        },
        {
            id: 'movie1',
            title: 'Inception',
            poster: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
            driveId: '1kKkxnptp43Cr6r1F9Qwei2SC20x2kRFu',
            type: 'movie'
        },
        {
            id: 'movie1',
            title: 'Inception',
            poster: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
            driveId: '1kKkxnptp43Cr6r1F9Qwei2SC20x2kRFu',
            type: 'movie'
        },
        {
            id: 'movie2',
            title: 'The Matrix',
            poster: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
            driveId: '2aBcDeFgHiJkLmNoPqRsTuVwXyZ',
            type: 'movie'
        }
    ],
    series: [
        {
            id: 'series1',
            title: 'Breaking Bad',
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m9qXTc8EEKkd2mb3QUajlKGr6YQ.jpg', // Breaking Bad poster
            type: 'series',
            seasons: [
                {
                    title: 'Season 1',
                    episodes: [
                        { title: 'Episode 1', driveId: '1WBWPcfLLU8XCz-8XT3H95m99E8_cL7PM' },
                        { title: 'Episode 2', driveId: '1y8e_hQxjvzdzGmyu1RQztszx3LFjg8hX' },
                        { title: 'Episode 3', driveId: '1I0YVPU6jiFNcG7zAT8ujE0kTLNDJ9gF1' },
                        { title: 'Episode 4', driveId: '1qVMvqGAybg4m7-du3tRGPpHw68397YsN' },
                        { title: 'Episode 5', driveId: '1dzeE6gyI1ztWnoKA-iuy0_OkTKe7e1Qh' },
                        { title: 'Episode 6', driveId: '1hxbyzlLVaIvInqu2oAHFegAZYhL5sS9T' },
                        { title: 'Episode 7', driveId: '1NyGtEwyC1hEsvBX8uZ44-KeF_NLzocOC' }
                    ]
                },
                
              {
                    title: 'Season 2',
                    episodes: [
                        { title: 'Episode 1', driveId: '1Pfqx1ICtqoo-p4Hd8dOnU-dDfz6Ag9BP' },
                        { title: 'Episode 2', driveId: '1TLq0YVcpgnL5P_k5XJBcJORWBHMjSf9S' },
                        { title: 'Episode 3', driveId: '1YKzmXKBBtvq1QZLZAFqxZb_xuQLPLZoq' },
                        { title: 'Episode 4', driveId: '1B6QWMq1OvGyZrvzIhjjOCpO2Slseg2un' },
                        { title: 'Episode 5', driveId: '1iL6FgAvTZ8Oz-7_llVXhnpGeRjTzrb_q' },
                        { title: 'Episode 6', driveId: '14n7R_NWbX7Xte9_JsVAxYJ9Fo5b9GPEf' },
                        { title: 'Episode 7', driveId: '1UJpY7FMLcMKsH2aGVXVc_sv45cXAvBdJ' },
                        { title: 'Episode 8', driveId: '1j8Kso8pIAGi_8T1pHjg0Q3q6hERraHhm' },
                        { title: 'Episode 9', driveId: '1irPdftUfAk8NzmbVwhW84VejzKxWC6H7' },
                        { title: 'Episode 10', driveId: '1lJn9zT7Xlsn8Jm2HdzvHWuKDV5QaxUIq' },
                        { title: 'Episode 11', driveId: '1GigjDLnRvS0NMdxrBQ3DBlTmI8Uv1fR2' },
                        { title: 'Episode 12', driveId: '1Lr81rViWm2L12Du-eVUvSvvYJeHp_kAg' },
                        { title: 'Episode 13', driveId: '1F6JzTEYboNbMIh-M18o_x5aU6gmJdRBT' }
                    ]
                },
                {
                    title: 'Season 3',
                    episodes: [
                        { title: 'Episode 1', driveId: '1XMDSXNh3jsUq4inzSOYooSHDTt_Btoti' },
                        { title: 'Episode 2', driveId: '1qCPQepx04j46FZ0RpfcB1sXjvCfM2hV7' },
                        { title: 'Episode 3', driveId: '15d1XbB_Mm7CZgdUBABZbpYV3wSUWhPcG' },
                        { title: 'Episode 4', driveId: '1T310XSfToDAf88H9s2U-GKvWAodEC_Xr' },
                        { title: 'Episode 5', driveId: '1weoi3oqJcgtMoZpkTA52J6CZkTLuIVXp' },
                        { title: 'Episode 6', driveId: '1tvfmADeLzoelOlQP3BNIq26wiEDkKCou' },
                        { title: 'Episode 7', driveId: '1VV7GFilu5nMO6KD3VlS0vhWpnfCFTFF6' },
                        { title: 'Episode 8', driveId: '1Xlg9Vf4pmePH8jvOTpS2RHRWlWy' },
                        { title: 'Episode 9', driveId: '1xyoF0SUqXbIA4ngoWXQMmPUm4MZvRL6I' },
                        { title: 'Episode 10', driveId: '1arWl8Wd9_e2FTIAmuistHf187IkO3SyD' },
                        { title: 'Episode 11', driveId: '1XakL_neeR8i7OUgZiOPtEBm17N6I8INJ' },
                        { title: 'Episode 12', driveId: '1aScT-2d3sbXMFvzakHGuAWU-ASuujUqW' },
                        { title: 'Episode 13', driveId: '1gB7rOHXypH7Kb49dYUzXP3KPDo9Qd0nF' }
                    ]
                },
                {
                    title: 'Season 4',
                    episodes: [
                        { title: 'Episode 1', driveId: '1Pyw3pWXXgz-6CDx0HeHd_tuPi1JWo5HC' },
                        { title: 'Episode 2', driveId: '1TLq0YVcpgnL5P_k5XJBcJORWBHMjSf9S' },
                        { title: 'Episode 3', driveId: '1h9vOzGnmo3ILQ8UD5FvNDCZfUtMGyzrc' },
                        { title: 'Episode 4', driveId: '13YfpHiYeguCQpF6dZo7w-eRdmG-aLyQu' },
                        { title: 'Episode 5', driveId: '1nTsa7Qu_8nRXh0zLitTv0-3jdyLS1J3r' },
                        { title: 'Episode 6', driveId: '13t2JY4G2928PMQ-BBMfmwFZSqyzNPvmJ' },
                        { title: 'Episode 7', driveId: '11zD5upQ5RFJLQptidYsArYc3yzPwhfQg' },
                        { title: 'Episode 8', driveId: '1FIMGjANgWQrMFzOAS0xw0t7HF7RwmtdY' },
                        { title: 'Episode 9', driveId: '1EBr8sjDDnSZxmmgeMzNFEZIUPN39m9Kt' },
                        { title: 'Episode 10', driveId: '1UqzMmHCfbo_yUH1LOHSrgADc-0XnAB24' },
                        { title: 'Episode 11', driveId: '13uI1EfWZ_hM7flaYKBaCravRstRlYBsZ' },
                        { title: 'Episode 12', driveId: '1WAOjDqAwE43LS-qfLn7s0BmuWXBo889N' },
                        { title: 'Episode 13', driveId: '1ZY3BQTUkEgYiYRYNv2cSoglTv5rRMPih' }
                    ]
                },
                {
                    title: 'Season 5',
                    episodes: [
                        { title: 'Episode 1', driveId: '1Pfqx1ICtqoo-p4Hd8dOnU-dDfz6Ag9BP' },
                        { title: 'Episode 2', driveId: '1TLq0YVcpgnL5P_k5XJBcJORWBHMjSf9S' },
                        { title: 'Episode 3', driveId: '1YKzmXKBBtvq1QZLZAFqxZb_xuQLPLZoq' },
                        { title: 'Episode 4', driveId: '1B6QWMq1OvGyZrvzIhjjOCpO2Slseg2un' },
                        { title: 'Episode 5', driveId: '1iL6FgAvTZ8Oz-7_llVXhnpGeRjTzrb_q' },
                        { title: 'Episode 6', driveId: '14n7R_NWbX7Xte9_JsVAxYJ9Fo5b9GPEf' },
                        { title: 'Episode 7', driveId: '1UJpY7FMLcMKsH2aGVXVc_sv45cXAvBdJ' },
                        { title: 'Episode 8', driveId: '1j8Kso8pIAGi_8T1pHjg0Q3q6hERraHhm' },
                        { title: 'Episode 9', driveId: '1irPdftUfAk8NzmbVwhW84VejzKxWC6H7' },
                        { title: 'Episode 10', driveId: '1lJn9zT7Xlsn8Jm2HdzvHWuKDV5QaxUIq' },
                        { title: 'Episode 11', driveId: '1GigjDLnRvS0NMdxrBQ3DBlTmI8Uv1fR2' },
                        { title: 'Episode 12', driveId: '1Lr81rViWm2L12Du-eVUvSvvYJeHp_kAg' },
                        { title: 'Episode 13', driveId: '1F6JzTEYboNbMIh-M18o_x5aU6gmJdRBT' }
                    ]
                }
                
              
            ]
        },
        
        
        {
            id: 'series2',
            title: 'Better Call Saul',
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg', // Breaking Bad poster
            type: 'series',
            seasons: [
                {
                    title: 'Season 1',
                    episodes: [
                        { title: 'Episode 1', driveId: '7aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 2', driveId: '8aBcDeFgHiJkLmNoPqRsTuVwXyZ' }
                    ]
                }
            ]
        }
    ],
    anime: [
        {
            id: 'anime1',
            title: 'Attack on Titan',
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hqRb1wyIVsaMukZElPBUXoJPqrR.jpg',
            type: 'anime',
            seasons: [
                {
                    title: 'Season 1',
                    episodes: [
                        { title: 'Episode 1', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 2', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 3', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 4', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 5', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 6', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 7', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 8', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 9', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 10', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 11', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 12', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 13', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 14', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 15', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 16', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 17', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 18', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 19', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 20', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 21', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 22', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 23', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 24', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 25', driveId: '10aBcDeFgHiJkLmNoPqRsTuVwXyZ' }
                    ]
                },
                {
                    title: 'Season 2',
                    episodes: [
                        { title: 'Episode 1', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 2', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 3', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 4', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 5', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 6', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 7', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 8', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 9', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 10', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 11', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 12', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' }
                        
                    ]
                },
                {
                    title: 'Season 3',
                    episodes: [
                        { title: 'Episode 1', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 2', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 3', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 4', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 5', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 6', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 7', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 8', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 9', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 10', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 11', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 12', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 13', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 14', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 15', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 16', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 17', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 18', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 19', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 20', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 21', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 22', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' }
                        
                    ]
                },
                {
                    title: 'Season 4',
                    episodes: [
                        { title: 'Episode 1', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 2', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 3', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 4', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 5', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 6', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 7', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 8', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 9', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 10', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 11', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 12', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 13', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 14', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 15', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 16', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 17', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 18', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 19', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 20', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 21', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 22', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 23', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 24', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 25', driveId: '10aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 26', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 27', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 28', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 29', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 30', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 31', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 32', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 33', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 34', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 35', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' }
                        
                    ]
                }
            ]
        },
        {
            id: 'anime2',
            title: 'Dr Stone',
            poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ve1Sv3sVArmE0nlFjzadcNv1G8r.jpg',
            type: 'anime',
            seasons: [
                {
                    title: 'Season 1',
                    episodes: [
                        { title: 'Episode 1', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 2', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 3', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 4', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 5', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 6', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 7', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 8', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 9', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 10', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 11', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 12', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 13', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 14', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 15', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 16', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 17', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 18', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 19', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 20', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 21', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 22', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 23', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 24', driveId: '9aBcDeFgHiJkLmNoPqRsTuVwXyZ' },
                        { title: 'Episode 25', driveId: '10aBcDeFgHiJkLmNoPqRsTuVwXyZ' }
                    ]
                }
            ]
        },
        {
            id: 'anime3',
            title: 'Demon Slayer',
            poster: 'https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg',
            type: 'anime',
            seasons: [
                {
                    title: 'Season 1',
                    episodes: [
                        { title: 'Episode 1', driveId: 'demonslayer_s1e1' },
                        { title: 'Episode 2', driveId: 'demonslayer_s1e2' },
                        { title: 'Episode 3', driveId: 'demonslayer_s1e3' },
                        { title: 'Episode 4', driveId: 'demonslayer_s1e4' },
                        { title: 'Episode 5', driveId: 'demonslayer_s1e5' }
                    ]
                },
                {
                    title: 'Season 2',
                    episodes: [
                        { title: 'Episode 1', driveId: 'demonslayer_s2e1' },
                        { title: 'Episode 2', driveId: 'demonslayer_s2e2' },
                        { title: 'Episode 3', driveId: 'demonslayer_s2e3' },
                        { title: 'Episode 4', driveId: 'demonslayer_s2e4' },
                        { title: 'Episode 5', driveId: 'demonslayer_s2e5' }
                    ]
                }
            ]
        }
    ]
};

// User data
let userData = {
    myList: [],
    login: {
        username: '0',
        password: '0'
    }
};

// DOM Elements
const loginPage = document.getElementById('login-page');
const mainContent = document.getElementById('main-content');
const videoPlayerPage = document.getElementById('video-player-page');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const logoutBtn = document.getElementById('logout-btn');
const navBtns = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');
const moviesGrid = document.getElementById('movies-grid');
const seriesGrid = document.getElementById('series-grid');
const animeGrid = document.getElementById('anime-grid');
const myListGrid = document.getElementById('my-list-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const myListBtn = document.getElementById('my-list-btn');
const seasonsModal = document.getElementById('seasons-modal');
const modalTitle = document.getElementById('modal-title');
const seasonsContainer = document.getElementById('seasons-container');
const closeBtn = document.querySelector('.close-btn');
const videoFrame = document.getElementById('video-frame');
const videoTitle = document.getElementById('video-title');
const backBtn = document.getElementById('back-btn');
const addToListBtn = document.getElementById('add-to-list-btn');
const currentEpisodeBtn = document.getElementById('current-episode-btn');
const episodeDropdown = document.getElementById('episode-dropdown');
const episodeList = document.getElementById('episode-list');

// Episode selector event listeners
currentEpisodeBtn.addEventListener('click', () => {
    episodeDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.episode-selector')) {
        episodeDropdown.classList.remove('active');
    }
});

// Function to update episode list
function updateEpisodeList(content) {
    episodeList.innerHTML = '';
    if (content.seasons) {
        content.seasons.forEach(season => {
            season.episodes.forEach(episode => {
                const episodeElement = document.createElement('div');
                episodeElement.classList.add('episode-item-dropdown');
                episodeElement.textContent = `${season.title} - ${episode.title}`;
                episodeElement.addEventListener('click', () => {
                    const episodeContent = {
                        ...content,
                        driveId: episode.driveId
                    };
                    playVideo(episodeContent, episode.title);
                    episodeDropdown.classList.remove('active');
                });
                episodeList.appendChild(episodeElement);
            });
        });
    }
}

// Current states
let currentContent = null;

// Login functionality
loginBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    if (username === userData.login.username && password === userData.login.password) {
        loginPage.classList.remove('active');
        mainContent.classList.add('active');
        // Load content on successful login
        loadContent();
    } else {
        loginError.textContent = 'Invalid username or password';
    }
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    mainContent.classList.remove('active');
    loginPage.classList.add('active');
    usernameInput.value = '';
    passwordInput.value = '';
    loginError.textContent = '';
});

// Navigation
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and sections
        navBtns.forEach(b => b.classList.remove('active'));
        contentSections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked button and corresponding section
        btn.classList.add('active');
        const sectionId = `${btn.dataset.section}-section`;
        document.getElementById(sectionId).classList.add('active');
    });
});
// Header buttons event listeners
document.getElementById('my-list-btn').addEventListener('click', () => {
    hideAllSections();
    document.getElementById('my-list-section').classList.add('active');
});

document.getElementById('logout-btn').addEventListener('click', () => {
    document.getElementById('main-content').classList.remove('active');
    document.getElementById('login-page').classList.add('active');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

// Video player controls
document.getElementById('back-btn').addEventListener('click', () => {
    document.getElementById('video-player-page').style.display = 'none';
    document.getElementById('main-content').classList.add('active');
});

document.getElementById('add-to-list-btn').addEventListener('click', function() {
    const videoTitle = document.getElementById('video-title').textContent;
    const currentContent = getCurrentlyPlayingContent();
    if (currentContent && !myList.includes(currentContent)) {
        myList.push(currentContent);
        updateMyListGrid();
    }
});

// Close modal
closeBtn.addEventListener('click', () => {
    seasonsModal.style.display = 'none';
});

// Back button from video player
backBtn.addEventListener('click', () => {
    videoPlayerPage.style.display = 'none';
    mainContent.classList.add('active');
});

// Add to list button
addToListBtn.addEventListener('click', () => {
    if (currentContent && !userData.myList.includes(currentContent.id)) {
        userData.myList.push(currentContent.id);
        addToListBtn.textContent = 'Remove from My List';
        saveUserData();
    } else if (currentContent) {
        userData.myList = userData.myList.filter(id => id !== currentContent.id);
        addToListBtn.textContent = 'Add to My List';
        saveUserData();
    }
});

// Debounce function to limit how often the search is performed
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search functionality
const debouncedSearch = debounce((searchTerm) => {
    if (searchTerm) {
        performSearch(searchTerm);
    } else {
        // If search is empty, restore original content
        loadContent();
    }
}, 300);

// Update search event listeners
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    debouncedSearch(searchTerm);
});

// Remove old event listeners since we're using real-time search
searchBtn.removeEventListener('click', () => {});
searchInput.removeEventListener('keypress', () => {});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            performSearch(searchTerm);
        }
    }
});

// Load content on page load
function loadContent() {
    renderMovies();
    renderSeries();
    renderAnime();
    loadUserData();
    initializeSecurity();
}

function protectVideoContent() {
    const video = document.getElementById('video-frame');
    if (video) {
        // Prevent downloading
        video.addEventListener('dragstart', e => e.preventDefault());
        video.addEventListener('contextmenu', e => e.preventDefault());
        
        // Add overlay to prevent screen recording
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.pointerEvents = 'none';
        document.body.appendChild(overlay);
    }
}

function initializeSecurity() {
    // Prevent right-click
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Prevent keyboard shortcuts for developer tools
    document.addEventListener('keydown', function(e) {
        // Prevent F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Prevent Ctrl+Shift+I and Ctrl+Shift+J
        if ((e.ctrlKey && e.shiftKey) && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
            e.preventDefault();
            return false;
        }
    });

    // Session timeout after 30 minutes of inactivity
    let timeout;
    function resetTimeout() {
        clearTimeout(timeout);
        timeout = setTimeout(logout, 30 * 60 * 1000); // 30 minutes
    }
    document.addEventListener('mousemove', resetTimeout);
    document.addEventListener('keypress', resetTimeout);
    resetTimeout();

    // Prevent iframe inspection
    if (window.self !== window.top) {
        window.top.location.href = window.self.location.href;
    }
}

// Render functions
function renderMovies() {
    moviesGrid.innerHTML = '';
    contentDatabase.movies.forEach(movie => {
        const movieElement = createContentElement(movie);
        moviesGrid.appendChild(movieElement);
    });
}

function renderSeries() {
    seriesGrid.innerHTML = '';
    contentDatabase.series.forEach(series => {
        const seriesElement = createContentElement(series);
        seriesGrid.appendChild(seriesElement);
    });
}

function renderAnime() {
    animeGrid.innerHTML = '';
    contentDatabase.anime.forEach(anime => {
        const animeElement = createContentElement(anime);
        animeGrid.appendChild(animeElement);
    });
}

function renderMyList() {
    myListGrid.innerHTML = '';
    userData.myList.forEach(id => {
        const item = findContentById(id);
        if (item) {
            const element = createContentElement(item);
            myListGrid.appendChild(element);
        }
    });
}

// Create content element
function createContentElement(content) {
    const element = document.createElement('div');
    element.classList.add('content-item');
    element.innerHTML = `
        <img src="${content.poster}" alt="${content.title}">
        <div class="item-title">${content.title}</div>
    `;
    
    element.addEventListener('click', () => {
        if (content.type === 'movie') {
            playVideo(content);
        } else {
            showSeasons(content);
        }
    });
    
    return element;
}

// Play video function
function playVideo(content, episodeTitle = '') {
    currentContent = content;
    mainContent.classList.remove('active');
    videoPlayerPage.style.display = 'block';
    
    // Set video title
    videoTitle.textContent = episodeTitle ? `${content.title} - ${episodeTitle}` : content.title;
    
    // Set up Google Drive embed URL
    const driveId = content.driveId || (episodeTitle ? content.driveId : '');
    videoFrame.src = `https://drive.google.com/file/d/${driveId}/preview`;
    
    // Apply video content protection
    protectVideoContent();
    
    // Update add to list button text
    if (userData.myList.includes(content.id)) {
        addToListBtn.textContent = 'Remove from My List';
    } else {
        addToListBtn.textContent = 'Add to My List';
    }

    // Update episode selector for series/anime
    if (content.type === 'series' || content.type === 'anime') {
        currentEpisodeBtn.style.display = 'block';
        currentEpisodeBtn.textContent = episodeTitle || 'Select Episode';
        updateEpisodeList(content);
    } else {
        currentEpisodeBtn.style.display = 'none';
        episodeDropdown.classList.remove('active');
    }
}

// Show seasons and episodes
function showSeasons(content) {
    currentContent = content;
    modalTitle.textContent = content.title;
    seasonsContainer.innerHTML = '';
    
    content.seasons.forEach((season, index) => {
        const seasonElement = document.createElement('div');
        seasonElement.classList.add('season-container');
        
        const seasonTitle = document.createElement('div');
        seasonTitle.classList.add('season-title');
        
        // Add season thumbnail
        const thumbnail = document.createElement('img');
        thumbnail.classList.add('season-thumbnail');
        thumbnail.src = content.poster; // Using series poster as season thumbnail
        thumbnail.alt = season.title;
        
        const titleText = document.createElement('span');
        titleText.textContent = season.title;
        
        seasonTitle.appendChild(thumbnail);
        seasonTitle.appendChild(titleText);
        
        const episodesContainer = document.createElement('div');
        episodesContainer.classList.add('episodes-container');
        
        season.episodes.forEach(episode => {
            const episodeElement = document.createElement('div');
            episodeElement.classList.add('episode-item');
            episodeElement.textContent = episode.title;
            
            episodeElement.addEventListener('click', () => {
                seasonsModal.style.display = 'none';
                const episodeContent = {
                    ...content,
                    driveId: episode.driveId
                };
                playVideo(episodeContent, episode.title);
            });
            
            episodesContainer.appendChild(episodeElement);
        });
        
        // Add click event to toggle episodes container
        seasonTitle.addEventListener('click', () => {
            episodesContainer.classList.toggle('expanded');
        });
        
        seasonElement.appendChild(seasonTitle);
        seasonElement.appendChild(episodesContainer);
        seasonsContainer.appendChild(seasonElement);
    });
    
    seasonsModal.style.display = 'block';
}

// Search function
function performSearch(term) {
    const results = [
        ...contentDatabase.movies.filter(movie => movie.title.toLowerCase().includes(term)),
        ...contentDatabase.series.filter(series => series.title.toLowerCase().includes(term)),
        ...contentDatabase.anime.filter(anime => anime.title.toLowerCase().includes(term))
    ];
    
    // Show all sections
    contentSections.forEach(s => s.classList.remove('active'));
    document.getElementById('movies-section').classList.add('active');
    
    // Clear all grids
    moviesGrid.innerHTML = '';
    
    // Display results
    if (results.length > 0) {
        results.forEach(item => {
            const element = createContentElement(item);
            moviesGrid.appendChild(element);
        });
    } else {
        moviesGrid.innerHTML = '<p>No results found. Try a different search term.</p>';
    }
}

// Helper functions
function findContentById(id) {
    let allContent = [
        ...contentDatabase.movies,
        ...contentDatabase.series,
        ...contentDatabase.anime
    ];
    
    return allContent.find(item => item.id === id);
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('movieFlixUserData', JSON.stringify(userData));
}

// Load user data from localStorage
function loadUserData() {
    const savedData = localStorage.getItem('movieFlixUserData');
    if (savedData) {
        userData = JSON.parse(savedData);
    }
}

// Function to add new content (for easy content management)
function addContent(contentType, content) {
    // Generate unique ID if not provided
    if (!content.id) {
        content.id = `${contentType}${Date.now()}`;
    }
    
    // Add content type if not specified
    if (!content.type) {
        content.type = contentType;
    }
    
    // Add to the database
    contentDatabase[contentType].push(content);
    
    // Re-render the appropriate section
    if (contentType === 'movies') renderMovies();
    else if (contentType === 'series') renderSeries();
    else if (contentType === 'anime') renderAnime();
    
    return content.id;
}

// Example usage for adding new content:
/*
// Add a new movie:
addContent('movies', {
    title: 'New Movie Title',
    poster: 'https://via.placeholder.com/200x300',
    driveId: 'your-google-drive-file-id'
});

// Add a new series:
addContent('series', {
    title: 'New Series Title',
    poster: 'https://via.placeholder.com/200x300',
    seasons: [
        {
            title: 'Season 1',
            episodes: [
                { title: 'Episode 1', driveId: 'drive-id-1' },
                { title: 'Episode 2', driveId: 'drive-id-2' }
            ]
        }
    ]
});

// Add a new anime:
addContent('anime', {
    title: 'New Anime Title',
    poster: 'https://via.placeholder.com/200x300',
    seasons: [
        {
            title: 'Season 1',
            episodes: [
                { title: 'Episode 1', driveId: 'drive-id-1' },
                { title: 'Episode 2', driveId: 'drive-id-2' }
            ]
        }
    ]
});
*/

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    // Show login page by default
    loginPage.classList.add('active');
});

// Prevent right-click and inspection
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchend', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });