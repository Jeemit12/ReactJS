export default function Body(){
    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

    }
    return (
        <div className="main">
            <form onClick={handleSubmit} action="" className="form-img">
                <input type="text" 
                placeholder="e.g. Oregano" 
                aria-label="Add Ingredient"
                name="ingredient"
                />
                <button >Add Ingredient</button>
            </form>
        </div>
    )
}