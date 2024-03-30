import { userActions, useUser } from "Components/utils/";
import { memo, useCallback, useMemo } from "react";
import "./LikeButton.css"

export const useLikeButton = (data) => {
  const [user, dispatchUser] = useUser()
  const liked = useMemo(() => user.likes.some(like => like.id === data.id), [user.likes, data])

  const handleFav = useCallback((e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    e.stopPropagation();

    if(liked){
      dispatchUser({type: userActions.REMOVE_LIKE, payload: data})
    } else {
      dispatchUser({type: userActions.ADD_LIKE, payload: data})
    }
  }, [liked, data])

  return { liked, handleFav }
}


const LikeButton = ({ data }) => {
  const {liked, handleFav} = useLikeButton(data)
  return (
    <button onClick={handleFav} className="circle-button like">{liked ? "❤️" : "🤍"}</button>
  )
}

export default memo(LikeButton)