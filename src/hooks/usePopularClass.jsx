import { useQuery } from "@tanstack/react-query";

const usePopularClass = () => {
    const { data: popularClass = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['popularClass'],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-school-server-three.vercel.app/popularClass');
            return res.json();
        }
    })

    return [popularClass, loading, refetch]
}

export default usePopularClass;


