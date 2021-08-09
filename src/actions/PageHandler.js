export const pageHandler = (pageInfo) => async(dispatch) => {
    //console.log(pageInfo);
    dispatch({type: 'CURRENT_PAGE', payload : pageInfo});
}