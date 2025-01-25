import { CATEGERY } from "../cate/categery";

export const categories_ARRAY: CATEGERY[]=[
    {
        id: 1,
        categery_name: 'MEN'
    },
    {
        id: 2,
        categery_name: 'WOMAN'
    },
    {
        id: 3,
        categery_name: 'CHILD'
    },
    {
        id: 4,
        categery_name: 'PANTS',
        parent_categery_id: 1,
    },
    {
        id: 5,
        categery_name: 'FOOT-WARE',
        parent_categery_id: 2,
    },
    {
        id: 6,
        categery_name: 'PARTY-WARE',
        parent_categery_id: 2,
    },
    {
        id: 7,
        categery_name: 'accessories',
        parent_categery_id: 3,
    }
]