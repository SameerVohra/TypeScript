interface user {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: number;
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface user {
  githubToken: string;
}

const sameer: user = {
  dbId: 1223,
  email: "s@s.com",
  userId: 213,
  githubToken: "github",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "sameer", value: 20) => {
    return value;
  },
};

interface admin extends user {
  role: "admin" | "ta" | "learner";
}

const sam: admin = {
  dbId: 2121,
  email: "sam@gmail.com",
  userId: 2211,
  githubToken: "git",
  startTrial: () => {
    return "admin";
  },
  getCoupon: (name: "admin", value: 50) => {
    return 50;
  },
  role: "admin",
};

console.log(sam);

export {};
