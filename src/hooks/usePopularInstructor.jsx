import { useQuery } from "@tanstack/react-query";

const usePopularInstructor = () => {
    const {data: popularInstructor = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popularInstructor'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/popularInstructor');
            return res.json();
        }
    })

    return [popularInstructor, loading, refetch]
}

export default usePopularInstructor;