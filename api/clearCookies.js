import cookie from "cookie";
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
    if (req.method !== 'POST') 
    return res.status(405).json({ status: 'fail', message: 'Method not allowed here!' });
  
    if (req.body.key === '_fw_crm_v') {
      res.setHeader("Set-Cookie", [
        cookie.serialize("_fw_crm_v", "", {
          maxAge: 0,
          path: "/",
          domain:'.traya.health'
        })
      ]);
      return res.status(200).json({ roles: null, auth: false });
    }
  
    return res.status(400).json({ status: 'fail', message: 'Bad request happened!' });
  };