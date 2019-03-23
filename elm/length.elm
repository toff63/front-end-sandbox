import Graphics.Element exposing (show)
import List exposing (filter)

main =
        show ((length [1..9]),  (zip ["Tom", "Sue", "Bob"] [45, 31, 26]), quicksort [5,6,3,5,34,6,5,756, 4])

length : List a -> Int
length list = 
        case list of
                [] -> 0
                first :: rest -> 1 + length rest

zip : List a -> List b -> List (a,b)
zip xs ys =
        case (xs, ys) of
                (x :: xs' , y :: ys') -> (x,y):: zip xs' ys'
                (_, _) -> []

quicksort : List comparable -> List comparable
quicksort list =
        case list of
                [] -> []
                pivot :: rest ->
                        let 
                            lower = filter (\n -> n <= pivot) rest
                            higher = filter (\n -> n > pivot) rest
                        in
                           quicksort lower ++ [pivot] ++ quicksort higher

