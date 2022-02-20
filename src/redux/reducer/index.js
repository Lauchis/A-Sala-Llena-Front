import {
  ORDER_SCORE,
  FILTER_PROVINCE,
  POST_SHOW,
  GET_ALL_SHOWS,
  FILTER_THEATER,
  FILTER_GENRE,
  GET_ALL_THEATERS,
  POST_VIEWER,
  FILTER_RATED,
  // FILTER_TICKETS_QTY,
  POST_TICKET,
  SHOW_DETAIL,
  THEATER_DETAIL,
  GET_VIEWER_DETAIL,
  PUT_VIEWER,
  GET_ALL_ViEWERS,
  GET_SHOW_BY_NAME,
  DELETE_VIEWER,
  CHECKOUT_PAY,
  POST_NEWSLETTER_SHOW,
  GET_ALL_TICKETS,
  GET_ALL_REVIEW,
  POST_PASSWORD_RECOVERY_VIEWER,
  POST_PASSWORD_RECOVERY_THEATER,
} from "../actions/index.js";

const initialState = {
  // score: [],
  theaters: [],
  shows: [],
  allshows: [],
  theatersDetail: {},
  showdetail: {},
  viewerDetail: {},
  viewers: [],
  tickets: [],
  link: "",
  allreviews: [],
};

function rootReducer(state = initialState, action) {
  //const theaters = state.theaters;
  // const shows = state.shows;
  // const allshows = state.allshows;

  switch (action.type) {
    case ORDER_SCORE:
      let arrayOrderScore =
        action.payload === "higherScore"
          ? state.shows.sort(function (x, y) {
              if (x.score > y.score) return -1;
              if (y.score > x.score) return 1;
              return 0;
            })
          : state.shows.sort(function (x, y) {
              if (x.score > y.score) return 1;
              if (y.score > x.score) return -1;
              return 0;
            });
      console.log(arrayOrderScore);
      return {
        ...state,
        shows: arrayOrderScore,
      };

    case FILTER_PROVINCE:
      let filterP = state.allshows
      let filterProvince =
        action.payload === "all"
          ? filterP
          : filterP?.filter((e) => e.theater?.province.includes(action.payload));
      return {
        ...state,
        shows: filterProvince,
      };
    case GET_ALL_SHOWS:
      return {
        ...state,
        shows: action.payload,
        allshows: action.payload,
      };
    case THEATER_DETAIL:
      return {
        ...state,
        theatersDetail: action.payload,
      };
    case POST_SHOW:
      return {
        ...state,
      };

    case GET_ALL_THEATERS:
      return {
        ...state,
        theaters: action.payload,
      };
    case FILTER_THEATER:
      let filterT = state.allshows
      let filterTheater =
        action.payload === "all"
          ? filterT
          : filterT.filter((e) => e.theater.name.includes(action.payload));
      return {
        ...state,
        shows: filterTheater,
      };
    case FILTER_GENRE:
      let filterG = state.allshows
      let filterGenre =
        action.payload === "all"
          ? filterG
          : filterG.filter((e) => e.genre.includes(action.payload));
      return {
        ...state,
        shows: filterGenre,
      };
    case FILTER_RATED:
      let filterR = state.allshows
      let filterRated =
        action.payload === "all"
          ? filterR
          : filterR.filter((e) => e.rated.includes(action.payload));
      return {
        ...state,
        shows: filterRated,
      };
    // case FILTER_TICKETS_QTY:
    //   let filterTickets =
    //     action.payload === "all"
    //       ? allshows
    //       : allshows.filter((e) => e.ticketsQty >= action.payload);
    //   return {
    //     ...state,
    //     shows: filterTickets,
    //   };

    //return {
    //    ...state,
    //    shows: filterGenre
    //}
    case POST_VIEWER:
      return {
        ...state,
      };
    case POST_TICKET:
      return {
        ...state,
      };
    case SHOW_DETAIL:
      return {
        ...state,
        showdetail: action.payload,
      };

    case GET_VIEWER_DETAIL:
      return {
        ...state,
        viewerDetail: action.payload,
      };
    case PUT_VIEWER:
      return {
        ...state,
      };

    case GET_ALL_ViEWERS:
      return {
        viewers: action.payload,
      };
    case GET_SHOW_BY_NAME:
      return {
        ...state,
        shows: action.payload,
      };
    case DELETE_VIEWER:
      return {
        ...state,
      };
    case CHECKOUT_PAY:
      return {
        ...state,
        link: action.payload,
      };
    case POST_NEWSLETTER_SHOW:
      return {
        ...state,
      };
    case GET_ALL_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    case GET_ALL_REVIEW:
      return {
        ...state,
        allreviews: action.payload,
      };
    case POST_PASSWORD_RECOVERY_VIEWER:
      return {
        ...state,
      };
    case POST_PASSWORD_RECOVERY_THEATER:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default rootReducer;
