import api from "./api";

export const findWinningbid = (selected) => {
    return api.getSecure(`http://localhost:9199/winnerBid?projectId=${selected}`);
}

export const getProjects = () => {
    return api.getSecure(`http://localhost:9199/projects/all`);
}

export const saveBids = (bid) => {
    return api.postSecure(`http://localhost:9199/bid`, bid);
}