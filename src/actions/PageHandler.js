export const PageHandler = (pageData) => async(dispatch) => {
    dispatch({type : 'CURRENT_PAGE', payload : pageData})
}