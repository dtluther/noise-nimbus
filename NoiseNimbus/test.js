{
  entities: {
    tracks: {
      1: {
        id: 1,
        title: "Shake It Off",
        genre: 'Pop',
        user_id: 1,
        comment_ids: [],
        // allows us to know if we can delete/edit track
        current_user_track: false
      },
      2: {
        id: 2,
        title: "Wildest Dreams - JJJSmith remix",
        genre: 'Pop',
        user_id: 1,
        comment_ids: [1, 2],
        current_user_track: false
      }
      3: {
        id: 3,
        title: "Love. feat. Zacari",
        genre: 'Hip Hop',
        user_id: 2,
        comment_ids: [3],
        current_user_track: true
      }
      4: {
        id: 4,
        title: "Feel It Still",
        genre: 'Pop',
        user_id: 3,
        comment_ids: [4],
        current_user_track: false
      }
    },
    comments: {
      1: {
        id: 1,
        body: "What a fantastic song!",
        user_id: 1,
        track_id: 2
      }
      2: {
        id: 2,
        body: "Best one I've heard yet!",
        user_id: 2,
        track_id: 2
      }
      3: {
        id: 3,
        body: "OMGGGG SOOO GOOOD!!!!",
        user_id: 1,
        track_id: 3
      }
      4: {
        id: 4,
        body: "A great jam for roadtrips.",
        user_id: 3,
        track_id: 4
      }
    }
    users: {
      1: {
        id: 1,
        username: "John Jacob Jingle...Smith",
        first_name: "John",
        track_ids: [1, 2],
        comment_ids: [1, 3]
      },
      2: {
        id: 2,
        username: "AmIKendrick?",
        first_name: "NotKendrick",
        track_ids: [3],
        comment_ids: [2]
      },
      3: {
        id: 3,
        username: "Upandcomingstar",
        track_ids: [4],
        comment_ids: [3]
      }
    }
  }
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    commentForm: ["Comment body cannot be blank"]
  }
  session: {
    currentUser: {
      id: 12,
      username: "WannaBeSpiceGirl",
      first_name: Jennaaay
    }
  }
}
