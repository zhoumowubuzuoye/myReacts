import Loadable from 'react-loadable';
import Loading from '@/components/Loading'

const CityHome = Loadable({loader:()=>import('@/views/city/home'),loading: Loading})
const IndexHomes = Loadable({loader:()=>import('@/views/city/indexs'),loading: Loading})

export default [{
        path: "/city/home",
        component: CityHome
    },
    {
        path: "/city/indexs",
        component: IndexHomes
    },
];