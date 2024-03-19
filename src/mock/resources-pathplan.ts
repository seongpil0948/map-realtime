export default {
  "TeleporterGate": [
    {
      "_id": "6225ac284c94960036abac7b",
      "networks": [],
      "resource_waitings": [
        {
          "_id": "64599fd273ee4a54333de9c1",
          "map": "6448a41973ee4a54330af998",
          "pose": {
            "x": 1.289992883075783,
            "y": -0.2306038880972885,
            "theta": 3.14
          },
          "type": "waiting",
          "name": "waiting-64599fbbffffffffffffffff",
          "description": "",
          "resource_active": true,
          "resource_type": "Location",
          "created_at": "2023-05-09T01:20:18.949Z",
          "updated_at": "2023-05-09T01:20:18.949Z",
          "id": "64599fd273ee4a54333de9c1"
        }
      ],
      "description": null,
      "resource_active": true,
      "resource_type": "TeleporterGate",
      "name": "3rd_teleporter",
      "map": "6448a41973ee4a54330af998",
      "area": {
        "x": 0.22253825,
        "y": -2.57405306,
        "theta": -1.54393401,
        "width": 1.7805911,
        "height": 1.70230177
      },
      "aligns": {
        "entries": [
          {
            "x": 0.1986409269873448,
            "y": -1.574732072002849,
            "theta": -1.5439340026547212
          }
        ],
        "exits": [
          {
            "x": 0.18521556570616582,
            "y": -1.575092795112127,
            "theta": 1.5907124576961393
          }
        ]
      },
      "properties": {
        "floor_id": 3,
        "floor_name": "3"
      },
      "parameters": {
        "marker_id": 0,
        "marker_pose": {
          "x": 0,
          "y": 0,
          "theta": 0
        }
      },
      "created_at": "2022-03-07T06:54:32.526Z",
      "updated_at": "2023-11-02T06:08:20.280Z",
      "teleporter": {
        "_id": "640e87025a3e59698482c920",
        "type": "elevator",
        "properties": {
          "ip": "elsa-edge",
          "port": 8883,
          "vendor": "elsa",
          "elsa_id": 1,
          "client_id": "yujin",
          "client_pw": "11977227-a4bd-43ab-b798-d47428f6774c",
          "group_id": 1,
          "internal_id": 1,
          "max_floor": 5,
          "min_floor": 1
        },
        "site": null,
        "name": "Center Elv",
        "description": null,
        "resource_active": true,
        "resource_type": "Teleporter",
        "created_at": "2023-03-13T02:14:26.690Z",
        "updated_at": "2023-03-13T11:06:19.305Z",
        "standing_offset": [],
        "id": "640e87025a3e59698482c920"
      },
      "evacuation": "62453f76be5840002a5d6d15",
      "waiting_after_cancel": {
        "_id": "62453f76be5840002a5d6d0f",
        "description": "",
        "resource_active": true,
        "resource_type": "Location",
        "pose": {
          "x": -2.611101282491269,
          "y": -0.884717702646018,
          "theta": 3.164289603608099
        },
        "map": "6448a41973ee4a54330af998",
        "name": "evacuation-62453f66bbbbbbbbbbbbbbbb",
        "type": "waiting_after_cancel",
        "created_at": "2022-03-31T05:43:18.891Z",
        "updated_at": "2023-04-26T06:26:09.454Z",
        "id": "62453f76be5840002a5d6d0f"
      },
      "doors": [
        {
          "pose": {
            "x": 0.1986409269873448,
            "y": -1.574732072002849
          },
          "door_no": 0,
          "evacuation": {
            "_id": "62453f76be5840002a5d6d15",
            "description": "",
            "resource_active": true,
            "resource_type": "Location",
            "pose": {
              "x": -2.648921961844124,
              "y": -0.0372752110421537,
              "theta": 3.164289603608099
            },
            "map": "6448a41973ee4a54330af998",
            "name": "evacuation-62453f6d4444444444444444",
            "type": "evacuation",
            "created_at": "2022-03-31T05:43:18.915Z",
            "updated_at": "2023-04-26T06:26:09.458Z",
            "id": "62453f76be5840002a5d6d15"
          }
        }
      ],
      "id": "6225ac284c94960036abac7b"
    }
  ],
  "Location": [
    {
      "_id": "6225ae4e4c94960036abb26b",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": 1.3598058852229542,
        "y": -0.21143099331554183,
        "theta": -3.139335321080803
      },
      "name": "3F_elevator_front",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:03:42.684Z",
      "updated_at": "2023-04-26T04:59:52.827Z",
      "id": "6225ae4e4c94960036abb26b"
    },
    {
      "_id": "6225ae664c94960036abb2b1",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": 13.142728564873522,
        "y": 3.4380615496327813,
        "theta": 0.03692084042616357
      },
      "name": "3F_infodesk",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:04:06.175Z",
      "updated_at": "2023-04-26T05:00:57.903Z",
      "id": "6225ae664c94960036abb2b1"
    },
    {
      "_id": "6225ae974c94960036abb344",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": -31.65563266266659,
        "y": 1.6490305421781386,
        "theta": -4.707240652234631
      },
      "name": "3F_QA_Room",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:04:55.122Z",
      "updated_at": "2023-04-26T04:59:38.372Z",
      "id": "6225ae974c94960036abb344"
    },
    {
      "_id": "6225aeb14c94960036abb393",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": 31.016737817190915,
        "y": 3.872707651770199,
        "theta": 0.013932145807381011
      },
      "name": "3F_FAE",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:05:21.040Z",
      "updated_at": "2023-04-26T05:00:48.725Z",
      "id": "6225aeb14c94960036abb393"
    },
    {
      "_id": "6225aebf4c94960036abb3c7",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": 35.68966228972599,
        "y": 4.060241555972084,
        "theta": 0.009173169442502866
      },
      "name": "3F_304",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:05:35.398Z",
      "updated_at": "2023-04-26T05:01:45.558Z",
      "id": "6225aebf4c94960036abb3c7"
    },
    {
      "_id": "6225aecb4c94960036abb3f5",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": 39.86328012953922,
        "y": 4.1852415559720875,
        "theta": 0.007950998601947302
      },
      "name": "3F_305",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:05:47.035Z",
      "updated_at": "2023-04-26T05:01:49.874Z",
      "id": "6225aecb4c94960036abb3f5"
    },
    {
      "_id": "6225aedb4c94960036abb430",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": 31.370785129968056,
        "y": 2.195294237311497,
        "theta": 1.558358885654865
      },
      "name": "3F_303",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:06:03.044Z",
      "updated_at": "2023-04-26T05:01:38.165Z",
      "id": "6225aedb4c94960036abb430"
    },
    {
      "_id": "6225aee84c94960036abb460",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": 31.381047897616966,
        "y": -2.5078176845195195,
        "theta": 3.14
      },
      "name": "3F_302",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:06:16.109Z",
      "updated_at": "2024-03-11T04:53:37.235Z",
      "id": "6225aee84c94960036abb460"
    },
    {
      "_id": "6225aef64c94960036abb48b",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": 31.72369414794099,
        "y": -6.931930741637668,
        "theta": 1.56638192119723
      },
      "name": "3F_301",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:06:30.921Z",
      "updated_at": "2023-04-26T05:01:20.947Z",
      "id": "6225aef64c94960036abb48b"
    },
    {
      "_id": "6225af014c94960036abb4b5",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": 29.74209892276602,
        "y": -9.049476395014679,
        "theta": 0.021701826489206915
      },
      "name": "3F_SPT",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:06:41.400Z",
      "updated_at": "2023-04-26T05:00:27.828Z",
      "id": "6225af014c94960036abb4b5"
    },
    {
      "_id": "6225af3e4c94960036abb56d",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": -23.171271111656786,
        "y": 3.5002353516769915,
        "theta": -0.0008271006002305384
      },
      "name": "3F_Cleaning_Robot",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:07:42.594Z",
      "updated_at": "2023-04-26T04:59:31.956Z",
      "id": "6225af3e4c94960036abb56d"
    },
    {
      "_id": "6225af5d4c94960036abb5d7",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": 22.680652290275418,
        "y": -8.97615237641772,
        "theta": 0.010254473405447322
      },
      "name": "3F_CoreTech",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-03-07T07:08:13.903Z",
      "updated_at": "2023-04-26T05:00:21.465Z",
      "id": "6225af5d4c94960036abb5d7"
    },
    {
      "_id": "62a29faf703a0300403b68a0",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": 18.119715108041476,
        "y": 3.4463759702241035,
        "theta": 0.016049766877394244
      },
      "name": "3F_AMS_Sales",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-06-10T01:34:39.638Z",
      "updated_at": "2023-04-26T05:01:07.889Z",
      "id": "62a29faf703a0300403b68a0"
    },
    {
      "_id": "62b520b924ec3f002c69aa15",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "pose": {
        "x": -11.867823181060501,
        "y": 2.6860398300550976,
        "theta": 0.006930502335141683
      },
      "name": "3F_B_HALL",
      "map": "6448a41973ee4a54330af998",
      "type": "waypoint",
      "created_at": "2022-06-24T02:26:01.523Z",
      "updated_at": "2023-04-26T04:47:42.977Z",
      "id": "62b520b924ec3f002c69aa15"
    },
    {
      "_id": "6448afde73ee4a54330b25a0",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -3.202694114777046,
        "y": -1.0551809933155418,
        "theta": -1.5425372178664418
      },
      "type": "waypoint",
      "name": "3F_cargo_front",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "created_at": "2023-04-26T05:00:14.083Z",
      "updated_at": "2023-04-26T05:00:14.083Z",
      "id": "6448afde73ee4a54330b25a0"
    },
    {
      "_id": "659b61bd4caafdd766c14478",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -15.797800693683868,
        "y": -3.6196551663364076,
        "theta": -3.16
      },
      "type": "waypoint",
      "name": "uvc_dock_ready",
      "description": "uvc_dock_ready",
      "resource_active": true,
      "resource_type": "Location",
      "created_at": "2024-01-08T02:45:17.851Z",
      "updated_at": "2024-01-08T02:48:51.375Z",
      "id": "659b61bd4caafdd766c14478"
    },
    {
      "_id": "65a61b8d4caafdd766ce277d",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -25.90624999999997,
        "y": -16.03124999999997,
        "theta": -1.56
      },
      "type": "waypoint",
      "name": "charger2_dock_ready",
      "description": "유비씨 조승민 테스트용 포인트입니다.",
      "resource_active": true,
      "resource_type": "Location",
      "created_at": "2024-01-16T06:00:45.051Z",
      "updated_at": "2024-01-25T07:22:50.476Z",
      "id": "65a61b8d4caafdd766ce277d"
    },
    {
      "_id": "65a61bc74caafdd766ce2806",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -29.565405328798185,
        "y": -15.74418934240363,
        "theta": 0
      },
      "type": "waypoint",
      "name": "uvc-sm-test-point2",
      "description": "유비씨 조승민 테스트 포인트2",
      "resource_active": true,
      "resource_type": "Location",
      "created_at": "2024-01-16T06:01:43.962Z",
      "updated_at": "2024-01-16T06:01:43.962Z",
      "id": "65a61bc74caafdd766ce2806"
    },
    {
      "_id": "65b20c248323def97042c255",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -16.375094809764857,
        "y": -0.8334814468006897,
        "theta": -3.15
      },
      "type": "waypoint",
      "name": "charger_dock_ready",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "created_at": "2024-01-25T07:22:12.351Z",
      "updated_at": "2024-01-25T07:22:12.351Z",
      "id": "65b20c248323def97042c255"
    },
    {
      "_id": "65b20c398323def97042c2c8",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -11.333699124154322,
        "y": -8.539932120399214,
        "theta": -0.84
      },
      "type": "waypoint",
      "name": "charger3_dock_ready",
      "description": "",
      "resource_active": true,
      "resource_type": "Location",
      "created_at": "2024-01-25T07:22:33.905Z",
      "updated_at": "2024-01-25T07:22:33.905Z",
      "id": "65b20c398323def97042c2c8"
    }
  ],
  "Zone": [
    {
      "_id": "6448a5ce73ee4a54330aff56",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": -8.579198247059804,
          "y": -4.6256947852354635
        },
        {
          "x": -4.0459562468948285,
          "y": -4.5956312166047795
        },
        {
          "x": -4.015892678264148,
          "y": -7.114614118513806
        },
        {
          "x": -8.534102894113769,
          "y": -7.12964590282915
        }
      ],
      "type": "prohibit",
      "param_sets": [],
      "name": "cargo_elevator_3rd",
      "description": null,
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2023-04-26T04:17:18.268Z",
      "updated_at": "2023-04-26T04:17:18.268Z",
      "id": "6448a5ce73ee4a54330aff56"
    },
    {
      "_id": "6448aaf573ee4a54330b1458",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": 32.67936092896857,
          "y": -4.890544339793365
        },
        {
          "x": 36.94843473277236,
          "y": -4.805939419539772
        },
        {
          "x": 36.863829812518766,
          "y": -10.724809168288491
        },
        {
          "x": 32.700512159031966,
          "y": -10.809414088542074
        }
      ],
      "type": "prohibit",
      "param_sets": [],
      "name": "301_prohibit",
      "description": null,
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2023-04-26T04:39:17.772Z",
      "updated_at": "2023-04-26T04:39:17.772Z",
      "id": "6448aaf573ee4a54330b1458"
    },
    {
      "_id": "6448ad1b73ee4a54330b1bc0",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": -30.62754424918152,
          "y": 2.656984274471072
        },
        {
          "x": -21.769645534139936,
          "y": 2.656984274471072
        },
        {
          "x": -21.6346709093694,
          "y": -8.387503361853295
        },
        {
          "x": -30.46557469945687,
          "y": -8.441493211761511
        }
      ],
      "type": "prohibit",
      "param_sets": [],
      "name": "3rd_B_prohibit",
      "description": null,
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2023-04-26T04:48:27.584Z",
      "updated_at": "2023-04-26T04:48:27.584Z",
      "id": "6448ad1b73ee4a54330b1bc0"
    },
    {
      "_id": "6448ad3673ee4a54330b1c17",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": -4.785778376165643,
          "y": -8.130313432310054
        },
        {
          "x": -3.285778376165644,
          "y": -8.130313432310054
        },
        {
          "x": -3.285778376165644,
          "y": -11.130313432310054
        },
        {
          "x": -4.8017760373532035,
          "y": -11.153869024989618
        }
      ],
      "type": "prohibit",
      "param_sets": [],
      "name": "B_backdoor",
      "description": "",
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2023-04-26T04:48:54.060Z",
      "updated_at": "2024-01-02T05:22:03.754Z",
      "worker_params": null,
      "id": "6448ad3673ee4a54330b1c17"
    },
    {
      "_id": "6448ad4273ee4a54330b1c4d",
      "map": "6448a41973ee4a54330af998",
      "areas": [],
      "polygon": [
        {
          "x": 3.6029201249809084,
          "y": -7.974661173059117
        },
        {
          "x": 5.1029201249809075,
          "y": -7.974661173059117
        },
        {
          "x": 5.1029201249809075,
          "y": -10.974661173059117
        },
        {
          "x": 3.586922463793348,
          "y": -10.99821676573868
        }
      ],
      "type": "prohibit",
      "param_sets": [],
      "name": "A_backdoor",
      "description": null,
      "resource_active": true,
      "resource_type": "Zone",
      "created_at": "2023-04-26T04:49:06.868Z",
      "updated_at": "2023-04-26T04:49:06.868Z",
      "id": "6448ad4273ee4a54330b1c4d"
    },
    {
      "_id": "6448ad5673ee4a54330b1c92",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": -8.920400148721441,
          "y": -1.341624555362971
        },
        {
          "x": -8.484918019361757,
          "y": -1.3416245553629746
        },
        {
          "x": -8.484918019361757,
          "y": -4.503594105087624
        },
        {
          "x": -8.920400148721441,
          "y": -4.341624555362971
        }
      ],
      "type": "prohibit",
      "param_sets": [],
      "name": "adsfsfa",
      "description": null,
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2023-04-26T04:49:26.814Z",
      "updated_at": "2023-04-26T04:49:26.814Z",
      "id": "6448ad5673ee4a54330b1c92"
    },
    {
      "_id": "6448ad7973ee4a54330b1d05",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": -1.3874068763831495,
          "y": 8.304102507074386
        },
        {
          "x": 1.5702636868556006,
          "y": 8.282937788693765
        },
        {
          "x": 1.6125931236168505,
          "y": 0.7960174920020808
        },
        {
          "x": -1.3874068763831495,
          "y": 0.7960174920020808
        }
      ],
      "type": "prohibit",
      "param_sets": [],
      "name": "3rd_center",
      "description": null,
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2023-04-26T04:50:01.353Z",
      "updated_at": "2023-04-26T04:50:01.353Z",
      "id": "6448ad7973ee4a54330b1d05"
    },
    {
      "_id": "6448c0b373ee4a54330b5cb2",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": -5.089003418602189,
          "y": 1.9601427695318847
        },
        {
          "x": -3.578582845018417,
          "y": 1.9670094049432159
        },
        {
          "x": -3.7476411627240864,
          "y": 0.37373986278555904
        },
        {
          "x": -5.120253418602189,
          "y": 0.3871648159025547
        }
      ],
      "type": "prohibit",
      "param_sets": [],
      "name": "autodoor_b",
      "description": "",
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2023-04-26T06:12:03.259Z",
      "updated_at": "2023-07-21T01:52:10.422Z",
      "worker_params": null,
      "id": "6448c0b373ee4a54330b5cb2"
    },
    {
      "_id": "6448c1da73ee4a54330b60e1",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": 3.538484454435091,
          "y": 6.821867541413342
        },
        {
          "x": 4.466019610972458,
          "y": 6.832550349884798
        },
        {
          "x": 4.4660196109724435,
          "y": 3.59752856351275
        },
        {
          "x": 3.549167262906556,
          "y": 3.62957698892712
        }
      ],
      "type": "prohibit",
      "param_sets": [],
      "name": "A_autodoor_1",
      "description": null,
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2023-04-26T06:16:58.508Z",
      "updated_at": "2023-05-19T01:36:46.457Z",
      "id": "6448c1da73ee4a54330b60e1"
    },
    {
      "_id": "6448c1e873ee4a54330b613d",
      "map": "6448a41973ee4a54330af998",
      "areas": [],
      "polygon": [
        {
          "x": 3.5598500713780066,
          "y": 1.9718724953718976
        },
        {
          "x": 4.487385227915373,
          "y": 1.9825553038433537
        },
        {
          "x": 4.4767024194439085,
          "y": -1.0174446961566428
        },
        {
          "x": 3.5705328798494715,
          "y": -1.0174446961566428
        }
      ],
      "type": "prohibit",
      "param_sets": [],
      "name": "A_autodoor_2",
      "description": null,
      "resource_active": true,
      "resource_type": "Zone",
      "created_at": "2023-04-26T06:17:12.529Z",
      "updated_at": "2023-04-26T06:17:12.529Z",
      "id": "6448c1e873ee4a54330b613d"
    },
    {
      "_id": "6449c76773ee4a54330e8778",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": 16.71281784315343,
          "y": 1.9380932156846598
        },
        {
          "x": 30.625,
          "y": 2.078125
        },
        {
          "x": 30.673654647053965,
          "y": -8.028283921576715
        },
        {
          "x": 16.6875,
          "y": -8.20431143136932
        }
      ],
      "type": "prohibit",
      "param_sets": [],
      "name": "Test_Area",
      "description": null,
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2023-04-27T00:52:55.152Z",
      "updated_at": "2023-04-27T00:52:55.152Z",
      "id": "6449c76773ee4a54330e8778"
    },
    {
      "_id": "64f822204f9ed82a6b1d87f3",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": -1.6937448786345684,
          "y": 11.513180159423094
        },
        {
          "x": 0.30625512136543165,
          "y": 11.513180159423094
        },
        {
          "x": 0.30625512136543165,
          "y": 9.513180159423094
        },
        {
          "x": -1.6937448786345684,
          "y": 9.513180159423094
        }
      ],
      "type": "parameter",
      "param_sets": [],
      "name": "55",
      "description": "",
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2023-09-06T06:54:24.259Z",
      "updated_at": "2023-09-06T07:06:31.421Z",
      "id": "64f822204f9ed82a6b1d87f3"
    },
    {
      "_id": "65cc56d23772bfbd52beb123",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": 8.007260142530377,
          "y": 13.069063420175032
        },
        {
          "x": 10.007260142530377,
          "y": 13.069063420175032
        },
        {
          "x": 10.007260142530377,
          "y": 11.069063420175032
        },
        {
          "x": 8.007260142530377,
          "y": 11.069063420175032
        }
      ],
      "type": "preferred",
      "param_sets": [],
      "worker_params": null,
      "cost_level": "high",
      "name": "test-preferred-zone",
      "description": "zone 데이터 테스트입니다.",
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2024-02-14T05:59:46.661Z",
      "updated_at": "2024-02-14T06:01:20.735Z",
      "id": "65cc56d23772bfbd52beb123"
    },
    {
      "_id": "65cc571e3772bfbd52beb391",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": 10.52526372150615,
          "y": 14.076264851765341
        },
        {
          "x": 12.52526372150615,
          "y": 14.076264851765341
        },
        {
          "x": 12.52526372150615,
          "y": 12.076264851765341
        },
        {
          "x": 10.52526372150615,
          "y": 12.076264851765341
        }
      ],
      "type": "unpreferred",
      "param_sets": [],
      "worker_params": null,
      "cost_level": "mid",
      "name": "test-unpreferred-zone",
      "description": "zone 데이터 테스트입니다.",
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2024-02-14T06:01:02.952Z",
      "updated_at": "2024-02-14T06:01:02.952Z",
      "id": "65cc571e3772bfbd52beb391"
    },
    {
      "_id": "65cc57523772bfbd52beb556",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": 11.411600981305618,
          "y": 10.772644156149129
        },
        {
          "x": 13.411600981305618,
          "y": 10.772644156149129
        },
        {
          "x": 13.411600981305618,
          "y": 8.772644156149129
        },
        {
          "x": 11.411600981305618,
          "y": 8.772644156149129
        }
      ],
      "type": "escape",
      "param_sets": [],
      "worker_params": {
        "designated": {
          "pose": [
            {
              "x": 10.831024866778392,
              "y": 9.946738982245076,
              "theta": 0,
              "degree": 0
            }
          ]
        }
      },
      "name": "test-escaping-zone",
      "description": "zone 데이터 테스트입니다. ",
      "resource_active": true,
      "resource_type": "Zone",
      "areas": [],
      "created_at": "2024-02-14T06:01:54.549Z",
      "updated_at": "2024-02-14T06:02:12.366Z",
      "id": "65cc57523772bfbd52beb556"
    }
  ],
  "AutodoorExt": [
    {
      "properties": {
        "connection": {
          "ip": "192.168.10.212",
          "port": 6722,
          "group_id": [
            "1"
          ],
          "open_check": 0,
          "close_check": 1,
          "auth_id": "root",
          "auth_pw": "00000000"
        },
        "vendor": "sr201",
        "wait_close": false
      },
      "_id": "6448aa1073ee4a54330b10e2",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": 3.993123862506586,
          "y": 4.779693727650461
        },
        {
          "x": 3.984753602537829,
          "y": 1.0470499141176752
        }
      ],
      "aligns": [
        {
          "pose": {
            "x": 2.719307254187882,
            "y": 2.879530443387356,
            "theta": 0.05
          },
          "tolerance": 1
        },
        {
          "pose": {
            "x": 5.208377338920485,
            "y": 2.918774570901654,
            "theta": 0.05
          },
          "tolerance": 1
        },
        {
          "pose": {
            "x": 5.264590353599779,
            "y": 2.9202824274251036,
            "theta": 3.17
          },
          "tolerance": 1
        },
        {
          "pose": {
            "x": 2.746964377291981,
            "y": 2.878695654697598,
            "theta": 3.17
          },
          "tolerance": 1
        }
      ],
      "door_open_area": [
        {
          "x": 1.2988025490165853,
          "y": 5.360419973386026
        },
        {
          "x": 6.797593873629729,
          "y": 5.394307623460431
        },
        {
          "x": 6.838746611025179,
          "y": 0.4430379117620511
        },
        {
          "x": 1.3159886382526054,
          "y": 0.6536992660023806
        }
      ],
      "resource_waitings": [],
      "name": "3rd_autodoor",
      "description": "",
      "resource_active": true,
      "resource_type": "AutodoorExt",
      "created_at": "2023-04-26T04:35:28.220Z",
      "updated_at": "2024-02-01T09:04:22.301Z",
      "id": "6448aa1073ee4a54330b10e2"
    },
    {
      "properties": {
        "connection": {
          "ip": "192.168.10.214",
          "port": 80,
          "group_id": [
            "0"
          ],
          "open_check": 0,
          "close_check": 1,
          "auth_id": "root",
          "auth_pw": "1234"
        },
        "vendor": "adam6060",
        "wait_close": false
      },
      "_id": "6448aa9273ee4a54330b12cd",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": -3.9104380899999995,
          "y": 4.006481710000003
        },
        {
          "x": -3.9228047761567737,
          "y": 1.0047801313016045
        }
      ],
      "aligns": [
        {
          "pose": {
            "x": -5.2702281567949,
            "y": 2.7934560122894396,
            "theta": 0
          },
          "tolerance": 1
        },
        {
          "pose": {
            "x": -2.6589040444762304,
            "y": 2.8309185091887805,
            "theta": 0
          },
          "tolerance": 1
        },
        {
          "pose": {
            "x": -2.712192620242135,
            "y": 2.838367708485091,
            "theta": -3.14
          },
          "tolerance": 1
        },
        {
          "pose": {
            "x": -5.326267627657884,
            "y": 2.7939944700712047,
            "theta": 3.14
          },
          "tolerance": 1
        }
      ],
      "door_open_area": [
        {
          "x": -6.836896599473185,
          "y": 4.683475670404093
        },
        {
          "x": -1.1984308621853472,
          "y": 4.575871192599013
        },
        {
          "x": -1.2435621125369636,
          "y": 0.4621612883069659
        },
        {
          "x": -6.7496899997061846,
          "y": 0.3759733221853878
        }
      ],
      "resource_waitings": [],
      "name": "3rd_B_autodoor",
      "description": "",
      "resource_active": true,
      "resource_type": "AutodoorExt",
      "created_at": "2023-04-26T04:37:38.139Z",
      "updated_at": "2024-02-01T09:04:22.312Z",
      "id": "6448aa9273ee4a54330b12cd"
    }
  ],
  "FleetZone": [
    {
      "_id": "64f822324f9ed82a6b1d8871",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": -1.6957680442749208,
          "y": 11.47072354149473
        },
        {
          "x": 0.3042319557250792,
          "y": 11.47072354149473
        },
        {
          "x": 0.3042319557250792,
          "y": 9.47072354149473
        },
        {
          "x": -1.6957680442749208,
          "y": 9.47072354149473
        }
      ],
      "type": "restricted",
      "mode": "loose",
      "nodes": [],
      "edges": [],
      "capacity": 1,
      "name": "ux",
      "description": "ux",
      "resource_active": true,
      "resource_type": "FleetZone",
      "areas": [],
      "created_at": "2023-09-06T06:54:42.007Z",
      "updated_at": "2023-09-06T07:06:20.619Z",
      "id": "64f822324f9ed82a6b1d8871"
    },
    {
      "_id": "64f82c544f9ed82a6b1daa1f",
      "map": "6448a41973ee4a54330af998",
      "polygon": [
        {
          "x": 0.6040256502427184,
          "y": 13.581571913151162
        },
        {
          "x": 2.6040256502427184,
          "y": 13.581571913151162
        },
        {
          "x": 2.6040256502427184,
          "y": 11.581571913151162
        },
        {
          "x": 0.6040256502427184,
          "y": 11.581571913151162
        }
      ],
      "type": "restricted",
      "mode": "loose",
      "nodes": [],
      "edges": [],
      "capacity": 1,
      "name": "ㅇㅇ",
      "description": "ㅇㅇ",
      "resource_active": true,
      "resource_type": "FleetZone",
      "areas": [],
      "created_at": "2023-09-06T07:37:56.750Z",
      "updated_at": "2023-09-06T07:37:56.750Z",
      "id": "64f82c544f9ed82a6b1daa1f"
    }
  ],
  "Marker": [
    {
      "param_point": {
        "pose": {
          "x": -16.96121766631442,
          "y": -3.5592337602542052,
          "theta": 3.14
        },
        "landform": {
          "type": "flat",
          "max_speed": 1,
          "max_angular_speed": 1
        }
      },
      "unpark": {
        "distance": 1,
        "backward": true
      },
      "_id": "659b4bf54caafdd766c129b3",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -17.56121766631442,
        "y": -3.5592337602542052,
        "theta": 0
      },
      "gocart_marker": true,
      "marker_value": {
        "no": 0,
        "id": 0,
        "rid": 4,
        "x": 0,
        "y": 0,
        "z": 0.37,
        "rx": -1.5708,
        "ry": 0,
        "rz": -1.5708
      },
      "chargeable": false,
      "charger_type": null,
      "tags": [],
      "parking_offset": {
        "x": -0.1,
        "y": 0,
        "theta": 0
      },
      "barrier": -0.2,
      "name": "uvc_dock",
      "description": "uvc dock",
      "resource_active": true,
      "resource_type": "Marker",
      "created_at": "2024-01-08T01:12:21.446Z",
      "updated_at": "2024-01-08T01:12:21.446Z",
      "id": "659b4bf54caafdd766c129b3"
    },
    {
      "param_point": {
        "pose": {
          "x": -17.4,
          "y": -0.84375,
          "theta": 3.14
        },
        "landform": {
          "type": "flat",
          "max_speed": 1,
          "max_angular_speed": 1
        }
      },
      "unpark": {
        "distance": 1,
        "backward": true
      },
      "_id": "65a6043c4caafdd766ce08e5",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -18,
        "y": -0.84375,
        "theta": 0
      },
      "gocart_marker": true,
      "marker_value": {
        "no": 0,
        "id": 11,
        "rid": 4,
        "x": 0,
        "y": 0,
        "z": 0.37,
        "rx": -1.5708,
        "ry": 0,
        "rz": -1.5708
      },
      "chargeable": true,
      "charger_type": "654336a7b9ddcec38739aaf2",
      "tags": [],
      "parking_offset": {
        "x": -0.1,
        "y": 0,
        "theta": 0
      },
      "barrier": -0.2,
      "name": "test-charger",
      "description": "",
      "resource_active": true,
      "resource_type": "Marker",
      "created_at": "2024-01-16T04:21:16.941Z",
      "updated_at": "2024-01-16T04:21:16.941Z",
      "id": "65a6043c4caafdd766ce08e5"
    },
    {
      "param_point": {
        "pose": {
          "x": -25.764525183391182,
          "y": -17.869101489187216,
          "theta": 4.72
        },
        "landform": {
          "type": "flat",
          "max_speed": 1,
          "max_angular_speed": 1
        }
      },
      "unpark": {
        "distance": 1,
        "backward": true
      },
      "_id": "65a604fa4caafdd766ce0a81",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -25.756390216921414,
        "y": -18.469046338586345,
        "theta": 1.58
      },
      "gocart_marker": true,
      "marker_value": {
        "no": 0,
        "id": 12,
        "rid": 4,
        "x": 0,
        "y": 0,
        "z": 0.37,
        "rx": -1.5708,
        "ry": 0,
        "rz": -1.5708
      },
      "chargeable": true,
      "charger_type": "654336a7b9ddcec38739aaf2",
      "tags": [],
      "parking_offset": {
        "x": -0.1,
        "y": 0,
        "theta": 0
      },
      "barrier": -0.2,
      "name": "test-charger2",
      "description": "",
      "resource_active": true,
      "resource_type": "Marker",
      "created_at": "2024-01-16T04:24:26.921Z",
      "updated_at": "2024-01-16T04:24:26.921Z",
      "id": "65a604fa4caafdd766ce0a81"
    },
    {
      "param_point": {
        "pose": {
          "x": -10.341399178961098,
          "y": -9.495078490905591,
          "theta": 5.45
        },
        "landform": {
          "type": "flat",
          "max_speed": 1,
          "max_angular_speed": 1
        }
      },
      "unpark": {
        "distance": 1,
        "backward": true
      },
      "_id": "65a605174caafdd766ce0b15",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -9.93736419381375,
        "y": -9.938650053088018,
        "theta": 2.31
      },
      "gocart_marker": true,
      "marker_value": {
        "no": 0,
        "id": 13,
        "rid": 4,
        "x": 0,
        "y": 0,
        "z": 0.37,
        "rx": -1.5708,
        "ry": 0,
        "rz": -1.5708
      },
      "chargeable": true,
      "charger_type": "654336a7b9ddcec38739aaf2",
      "tags": [],
      "parking_offset": {
        "x": -0.1,
        "y": 0,
        "theta": 0
      },
      "barrier": -0.2,
      "name": "test-charger3",
      "description": "",
      "resource_active": true,
      "resource_type": "Marker",
      "created_at": "2024-01-16T04:24:55.322Z",
      "updated_at": "2024-01-16T04:24:55.322Z",
      "id": "65a605174caafdd766ce0b15"
    },
    {
      "param_point": {
        "pose": {
          "x": -11.995620554621645,
          "y": -0.5999840168355917,
          "theta": 1.58
        },
        "landform": {
          "type": "flat",
          "max_speed": 1,
          "max_angular_speed": 1
        }
      },
      "unpark": {
        "distance": 1,
        "backward": true
      },
      "_id": "65b06f3d8323def9703f786f",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -12,
        "y": 0,
        "theta": -1.56
      },
      "gocart_marker": false,
      "marker_value": {
        "no": 0,
        "id": 0,
        "rid": 4,
        "x": 0,
        "y": 0,
        "z": 0.37,
        "rx": -1.5708,
        "ry": 0,
        "rz": -1.5708
      },
      "chargeable": true,
      "charger_type": "654336a7b9ddcec38739aaf2",
      "tags": [
        "charging"
      ],
      "parking_offset": {
        "x": -0.1,
        "y": 0,
        "theta": 0
      },
      "barrier": -0.2,
      "name": "test-emergency-charger",
      "description": "emergency",
      "resource_active": true,
      "resource_type": "Marker",
      "created_at": "2024-01-24T02:00:29.265Z",
      "updated_at": "2024-01-24T02:00:29.265Z",
      "id": "65b06f3d8323def9703f786f"
    },
    {
      "param_point": {
        "pose": {
          "x": -12.732829036545795,
          "y": 3.7742406498218095,
          "theta": 1.57
        },
        "landform": {
          "type": "flat",
          "max_speed": 1,
          "max_angular_speed": 1
        }
      },
      "unpark": {
        "distance": 1,
        "backward": true
      },
      "_id": "65bb4b808323def9705544f5",
      "map": "6448a41973ee4a54330af998",
      "pose": {
        "x": -12.733488995175136,
        "y": 4.374240286867142,
        "theta": -1.57
      },
      "gocart_marker": true,
      "marker_value": {
        "no": 0,
        "id": 999,
        "rid": 4,
        "x": 0,
        "y": 0,
        "z": 0.37,
        "rx": -1.5708,
        "ry": 0,
        "rz": -1.5708
      },
      "chargeable": false,
      "charger_type": null,
      "tags": [],
      "parking_offset": {
        "x": -0.1,
        "y": 0,
        "theta": 0
      },
      "barrier": -0.2,
      "name": "3F_marker",
      "description": "",
      "resource_active": true,
      "resource_type": "Marker",
      "created_at": "2024-02-01T07:42:56.434Z",
      "updated_at": "2024-02-01T07:42:56.434Z",
      "id": "65bb4b808323def9705544f5"
    }
  ],
  "Worker": [
    {
      "_id": "65444a7e89a0c44c85c35e71",
      "uuid": "uuid_gocart_virtual_vw_2",
      "__v": 0,
      "created_at": "2023-11-03T01:18:54.523Z",
      "name": "vw_2",
      "status": "idle",
      "status_toggle": [],
      "type_specific": {
        "robot_info": {
          "width": 0.5,
          "length": 0.8,
          "size_center_to_front": 0.4,
          "size_center_to_rear": 0.4,
          "size_center_to_left": 0.25,
          "size_center_to_right": 0.25,
          "model": "YMP-180SD-10"
        },
        "battery": {
          "battery_level": 84.89099999992786,
          "now_charging": false,
          "charge_source": "none"
        },
        "location": {
          "map": "6448a41973ee4a54330af998",
          "pose2d": {
            "x": -11.867823181060501,
            "y": 2.6860398300550976,
            "theta": 0.006930502335141683,
            "id": 0
          },
          "semantic_location": null,
          "romo_state": "ready",
          "odometry": {
            "orient_w": 0,
            "orient_x": 0,
            "orient_y": 0,
            "orient_z": 0,
            "position_x": 0,
            "position_y": 0,
            "position_z": 0,
            "velo_dx": 0,
            "velo_dy": 0,
            "velo_dz": 0
          },
          "path_plan": null
        },
        "ip": "175.198.209.70",
        "dynamic_footprint": null,
        "home_station": {
          "name": "undefined",
          "id": null
        },
        "target_fms_ip": "ams.robotconcert.org",
        "fmz": {
          "fmz_id": null,
          "current": null,
          "node_path": [],
          "destination": null
        }
      },
      "updated_at": "2024-03-19T01:23:21.194Z",
      "status_p": "idle",
      "id": "65444a7e89a0c44c85c35e71"
    },
    {
      "_id": "6594c089f2ae2b9eb8e0502e",
      "uuid": "uuid_gocart_virtual_vw_3",
      "__v": 0,
      "created_at": "2024-01-03T02:03:53.175Z",
      "name": "vw_3",
      "status": "idle",
      "status_toggle": [],
      "type_specific": {
        "robot_info": {
          "width": 0.5,
          "length": 0.8,
          "size_center_to_front": 0.4,
          "size_center_to_rear": 0.4,
          "size_center_to_left": 0.25,
          "size_center_to_right": 0.25,
          "model": "YMP-180SD-10"
        },
        "battery": {
          "battery_level": 84.88399999992782,
          "now_charging": false,
          "charge_source": "none"
        },
        "location": {
          "map": "6448a41973ee4a54330af998",
          "pose2d": {
            "x": -3.2136250000000004,
            "y": -1.0911458333333321,
            "theta": -1.018938442268143,
            "id": 2
          },
          "semantic_location": null,
          "romo_state": "ready",
          "odometry": {
            "orient_w": 0,
            "orient_x": 0,
            "orient_y": 0,
            "orient_z": 0,
            "position_x": 0,
            "position_y": 0,
            "position_z": 0,
            "velo_dx": 0,
            "velo_dy": 0,
            "velo_dz": 0
          },
          "path_plan": {
            "global": [
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -0.5925925925925917
              },
              {
                "x": -3.2136250000000004,
                "y": -0.0940393518518512
              },
              {
                "x": -3.2136250000000004,
                "y": 0.4045138888888893
              },
              {
                "x": -3.2136250000000004,
                "y": 0.9030671296296298
              },
              {
                "x": -3.113999999999997,
                "y": 1.4016203703703702
              },
              {
                "x": -3.014375000000001,
                "y": 1.800462962962964
              },
              {
                "x": -2.815125000000002,
                "y": 2.1993055555555543
              },
              {
                "x": -2.7154999999999987,
                "y": 2.598148148148148
              },
              {
                "x": -2.7154999999999987,
                "y": 2.797569444444445
              },
              {
                "x": -2.7154999999999987,
                "y": 2.797569444444445
              },
              {
                "x": -2.7154999999999987,
                "y": 2.797569444444445
              },
              {
                "x": -2.7154999999999987,
                "y": 2.797569444444445
              },
              {
                "x": -2.7154999999999987,
                "y": 2.797569444444445
              },
              {
                "x": -2.7154999999999987,
                "y": 2.797569444444445
              },
              {
                "x": -2.7154999999999987,
                "y": 2.797569444444445
              },
              {
                "x": -3.2136250000000004,
                "y": 2.797569444444445
              },
              {
                "x": -3.711750000000002,
                "y": 2.797569444444445
              },
              {
                "x": -4.209874999999997,
                "y": 2.797569444444445
              },
              {
                "x": -4.707999999999998,
                "y": 2.797569444444445
              },
              {
                "x": -5.206125,
                "y": 2.797569444444445
              },
              {
                "x": -5.305750000000003,
                "y": 2.797569444444445
              },
              {
                "x": -5.305750000000003,
                "y": 2.797569444444445
              },
              {
                "x": -5.305750000000003,
                "y": 2.797569444444445
              },
              {
                "x": -5.305750000000003,
                "y": 2.797569444444445
              },
              {
                "x": -5.604624999999999,
                "y": 2.4984375000000014
              },
              {
                "x": -5.903500000000001,
                "y": 2.1993055555555543
              },
              {
                "x": -6.2023750000000035,
                "y": 1.9001736111111107
              },
              {
                "x": -6.501249999999999,
                "y": 1.6010416666666671
              },
              {
                "x": -6.800125000000001,
                "y": 1.3019097222222236
              },
              {
                "x": -7.098999999999997,
                "y": 1.0027777777777764
              },
              {
                "x": -7.597124999999998,
                "y": 1.0027777777777764
              },
              {
                "x": -7.995624999999997,
                "y": 0.8033564814814831
              },
              {
                "x": -8.493749999999999,
                "y": 0.8033564814814831
              },
              {
                "x": -8.892249999999997,
                "y": 0.504224537037036
              },
              {
                "x": -9.191125,
                "y": 0.10538194444444571
              },
              {
                "x": -9.490000000000002,
                "y": -0.19375000000000142
              },
              {
                "x": -9.788874999999997,
                "y": -0.492881944444445
              },
              {
                "x": -10.08775,
                "y": -0.8917245370370388
              },
              {
                "x": -10.386625000000002,
                "y": -1.1908564814814824
              },
              {
                "x": -10.685499999999998,
                "y": -1.489988425925926
              },
              {
                "x": -10.685499999999998,
                "y": -1.9885416666666664
              },
              {
                "x": -10.785125,
                "y": -2.487094907407407
              },
              {
                "x": -10.785125,
                "y": -2.9856481481481474
              },
              {
                "x": -10.785125,
                "y": -3.484201388888888
              },
              {
                "x": -10.785125,
                "y": -3.9827546296296283
              },
              {
                "x": -10.785125,
                "y": -4.481307870370369
              },
              {
                "x": -10.884749999999997,
                "y": -4.880150462962963
              },
              {
                "x": -11.183625,
                "y": -5.278993055555556
              },
              {
                "x": -11.183625,
                "y": -5.777546296296297
              },
              {
                "x": -11.183625,
                "y": -6.276099537037037
              },
              {
                "x": -11.283250000000002,
                "y": -6.674942129629631
              },
              {
                "x": -11.283250000000002,
                "y": -7.173495370370372
              },
              {
                "x": -11.283250000000002,
                "y": -7.672048611111112
              },
              {
                "x": -11.283250000000002,
                "y": -8.170601851851853
              },
              {
                "x": -11.333699124154322,
                "y": -8.539932120399214
              },
              {
                "x": -11.333699124154322,
                "y": -8.539932120399214
              },
              {
                "x": -11.333699124154322,
                "y": -8.539932120399214
              },
              {
                "x": -11.333699124154322,
                "y": -8.539932120399214
              },
              {
                "x": -11.333699124154322,
                "y": -8.539932120399214
              }
            ],
            "local": [
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321,
                "theta": -1.018938442268143
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -1.0911458333333321
              },
              {
                "x": -3.2136250000000004,
                "y": -0.5925925925925917
              },
              {
                "x": -3.2136250000000004,
                "y": -0.0940393518518512
              },
              {
                "x": -3.2136250000000004,
                "y": 0.4045138888888893
              },
              {
                "x": -3.2136250000000004,
                "y": 0.9030671296296298
              }
            ]
          },
        },
        "ip": "175.198.209.70",
        "target_fms_ip": "ams.robotconcert.org",
        "dynamic_footprint": null,
        "home_station": {
          "name": "undefined",
          "id": null
        },
        "fmz": {
          "fmz_id": null,
          "current": null,
          "node_path": [],
          "destination": null
        }
      },
      "updated_at": "2024-03-19T01:23:21.637Z",
      "status_p": "idle",
      "id": "6594c089f2ae2b9eb8e0502e"
    }
  ]
}