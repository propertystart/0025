var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-entrance",
      "name": "Front Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.1637825865196163,
        "pitch": 0.006886748881457905,
        "fov": 1.3219339076578436
      },
      "linkHotspots": [
        {
          "yaw": 0.22092780663543543,
          "pitch": 0.24242952744420165,
          "rotation": 0,
          "target": "1-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.5324906547268924,
        "pitch": 0.10734992888198391,
        "fov": 1.3219339076578436
      },
      "linkHotspots": [
        {
          "yaw": 0.38561664828099396,
          "pitch": 0.21426496346934876,
          "rotation": 5.497787143782138,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.3073583579514576,
          "pitch": 0.3296868929847854,
          "rotation": 0.7853981633974483,
          "target": "2-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-master",
      "name": "Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0393030314439784,
        "pitch": 0.18468392753674934,
        "fov": 1.3219339076578436
      },
      "linkHotspots": [
        {
          "yaw": 1.8527881228208747,
          "pitch": 0.2984171503160642,
          "rotation": 7.853981633974483,
          "target": "4-kitchen"
        },
        {
          "yaw": -3.0151011650903428,
          "pitch": 0.4017281999460174,
          "rotation": 0,
          "target": "3-master-en-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-master-en-suite",
      "name": "Master En-Suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.1001542653305476,
        "pitch": 0.18892855493366056,
        "fov": 1.3219339076578436
      },
      "linkHotspots": [
        {
          "yaw": 2.017146981526478,
          "pitch": 0.3349052875559728,
          "rotation": 5.497787143782138,
          "target": "2-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4166889770392945,
        "pitch": 0.22492001649691318,
        "fov": 1.3219339076578436
      },
      "linkHotspots": [
        {
          "yaw": 2.111414425666898,
          "pitch": 0.23751966026408056,
          "rotation": 1.5707963267948966,
          "target": "1-lounge"
        },
        {
          "yaw": 1.0251416065264287,
          "pitch": 0.14364484508089248,
          "rotation": 0.7853981633974483,
          "target": "7-bedroom-2"
        },
        {
          "yaw": 0.8737115438533785,
          "pitch": 0.2616926072497865,
          "rotation": 11.780972450961727,
          "target": "10-studyretreat"
        },
        {
          "yaw": -0.19995962770229525,
          "pitch": 0.17341785921786546,
          "rotation": 5.497787143782138,
          "target": "5-alfresco"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-alfresco",
      "name": "Alfresco",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3336616251784221,
        "pitch": 0.0922058871503566,
        "fov": 1.3219339076578436
      },
      "linkHotspots": [
        {
          "yaw": -0.44823451506069745,
          "pitch": 0.33549358735565527,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4642403002977993,
        "pitch": 0.16436366206360375,
        "fov": 1.3219339076578436
      },
      "linkHotspots": [
        {
          "yaw": -0.5002234580051681,
          "pitch": 0.1799449762865244,
          "rotation": 1.5707963267948966,
          "target": "1-lounge"
        },
        {
          "yaw": -1.147706370633605,
          "pitch": 0.0018255329193817005,
          "rotation": 4.71238898038469,
          "target": "10-studyretreat"
        },
        {
          "yaw": -0.9370534105085717,
          "pitch": 0.17757156054068446,
          "rotation": 0.7853981633974483,
          "target": "7-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2823121103408752,
        "pitch": 0.012194073789867588,
        "fov": 1.3219339076578436
      },
      "linkHotspots": [
        {
          "yaw": -0.894765080434869,
          "pitch": 0.3271834649061649,
          "rotation": 4.71238898038469,
          "target": "6-living"
        },
        {
          "yaw": -0.5664240781745917,
          "pitch": 0.21351070627754964,
          "rotation": 0.7853981633974483,
          "target": "10-studyretreat"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.8757561339738267,
        "pitch": 0.024922747447355675,
        "fov": 1.3219339076578436
      },
      "linkHotspots": [
        {
          "yaw": -0.7104846467721107,
          "pitch": 0.2852917354385518,
          "rotation": 0.7853981633974483,
          "target": "7-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8661140062192025,
          "pitch": 0.12441724218072103,
          "rotation": 0,
          "target": "10-studyretreat"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-studyretreat",
      "name": "Study/Retreat",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.6982602677863428,
        "pitch": 0.11256241967351954,
        "fov": 1.3219339076578436
      },
      "linkHotspots": [
        {
          "yaw": -0.8056313005714202,
          "pitch": 0.33903256358213874,
          "rotation": 1.5707963267948966,
          "target": "11-bedroom-4"
        },
        {
          "yaw": -1.7590207255404398,
          "pitch": 0.24325005626420015,
          "rotation": 0,
          "target": "6-living"
        },
        {
          "yaw": -2.2571884988611686,
          "pitch": 0.33568666734302965,
          "rotation": 10.995574287564278,
          "target": "9-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.8602205356540793,
        "pitch": 0.25718685014200915,
        "fov": 1.3219339076578436
      },
      "linkHotspots": [
        {
          "yaw": -1.8568764291660251,
          "pitch": 0.2597507254910525,
          "rotation": 0,
          "target": "10-studyretreat"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "18 Carter Rd Armstrong Creek",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
