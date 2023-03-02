interface IProps {
    handleDelete: Function,
}


const DeleteButton = (props: IProps) => {
    return(
        <button onClick={() => props.handleDelete()} className="bg-red-400 hover:bg-red-300 rounded-sm w-4 h-4 my-2 mx-1 px-0.5 py-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                <path d="M21 6l-3 18h-12l-3-18h2.028l2.666 16h8.611l2.666-16h2.029zm-4.711-4c-.9 0-1.631-1.099-1.631-2h-5.316c0 .901-.73 2-1.631 2h-5.711v2h20v-2h-5.711z"/>
            </svg>
        </button>
    )
};

export default DeleteButton;