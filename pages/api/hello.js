// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const hello = (req, res) => {
  res.status(200).json({ name: 'John Doe' })
  // res.status(200).json({ name: 'J0hn D03' })
}

export default hello
