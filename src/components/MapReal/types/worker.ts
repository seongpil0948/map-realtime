export type worker = {
   operation: string,
   database: string,
   collection: string,
   document_id: string,
   document: { 
    _id: string,
    uuid: string,
    __v: number,
    created_at: string,
    name: string,
    status: string,
    status_toogle: any[],
    type_specific: {
        robot_info: {
            width: number,
            length: number,
            size_center_to_front: number,
            size_center_to_rear: number,
            size_center_to_left: number,
            size_center_to_right: number,
            model: string
        },
        battery: {
            battery_level: number,
            now_charging: boolean,
            charge_source: string
        },
        location: {
            map: string,
            pose2d: {
                x: number,
                y: number,
                theta: number,
                id: number 
            },
            semantic_location: any,
            romo_state: string,
            odometry: {
                orient_w: number,
                orient_x: number,
                orient_y: number,
                orient_z: number,
                position_x: number,
                position_y: number,
                position_z: number,
                velo_dx: number,
                velo_dy: number,
                velo_dz: number
            },
            path_plan: any
        },
        ip: string,
        target_fms_ip: string,
        dynamic_footprint: any,
        home_station: {
            name: string,
            id: any
        },
        fmz: {
            fmz_id: any,
            current: any,
            node_path: any[],
            destination: any
        }
    },
    updated_at: string,
    status_p: string,
    id: string 
   },
   created_at: string,
   publiched_at: number
}