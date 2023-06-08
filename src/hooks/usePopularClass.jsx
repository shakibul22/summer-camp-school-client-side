import { useQuery } from "@tanstack/react-query";

const usePopularClass = () => {
    const {data: popularClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popularClass'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/popularClass');
            return res.json();
        }
    })

    return [popularClass, loading, refetch]
}

export default usePopularClass;


