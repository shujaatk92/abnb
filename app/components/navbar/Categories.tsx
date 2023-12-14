"use client"
import Container from "../Container"
import { useSearchParams, usePathname } from "next/navigation"
import CategoryBox from "../CategoryBox"
import { TbBeach, TbMountain, TbPool } from "react-icons/tb"
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi"
import { MdOutlineVilla } from "react-icons/md"
import { FaSkiing } from "react-icons/fa"
import { BsSnow } from "react-icons/bs"
import { IoDiamond } from "react-icons/io5"
 
export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: "This properity is closed to beach"
    },
    {
        label: 'Windmill',
        icon: GiWindmill,
        description: "This properity has windmill"
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: "This properity is modern"
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: "This properity is in the countryside"
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: "This properity has a pool"
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: "This properity is on island"
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: "This properity is closed to a lake"
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: "This properity has a skiing activities"
    },
    {
        label: 'Castle',
        icon: GiCastle,
        description: "This properity is in a castle"
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: "This properity has a camping activities"
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: "This properity has a camping activities"
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: "This properity is in a cave"
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: "This properity is in the desert"
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: "This properity is in the barn"
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: "This properity is luxurious"
    }
    
]


const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';
    if(!isMainPage){
        return null
    }

    return(
        <Container>
            <div className="flex flex-row items-center justify-between pt-4 overflow-x-auto">
                {
                    categories.map((item) => (
                        <CategoryBox 
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        selected={category === item.label}
                        />
                    ))
                }
            </div>
        </Container>
    )
}

export default Categories