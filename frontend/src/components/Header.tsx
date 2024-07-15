import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { useSelector } from "react-redux"


const Header = () => {
  const { userInfo } = useSelector((state: any) => state.auth)

  return (
    <header className="w-100 h-[10vh] flex p-8 border-b-2">
      <div className="w-1/3"></div>
      <div className="w-1/3 flex justify-center items-center">
        <h1 className="text-3xl text-center font-bold">Auth Me-rn fr no cap</h1>
      </div>
      <div className="w-1/3 flex justify-end items-center">
        {userInfo ? (
          <div className="flex gap-2">
            <p className="text-lg">{userInfo.name}</p>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded"
            >
              <FaSignOutAlt />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            <FaSignInAlt />
          </button>
        )}
      </div>
    </header>
  )
}

export default Header