import axios from 'axios'

export const setApplyId = () => {
    const ApplyID = localStorage.getItem('apply_id')
    if (ApplyID)
        axios.defaults.headers.common["apply_id"] = ApplyID
    else
        delete axios.defaults.headers.common["apply_id"]
}