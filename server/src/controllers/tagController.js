import Tag from '../models/tagModel';
import Job from '../models/jobModel';
import request from 'request';

//Add Tags
const addJobTags = (req, res) => {
  let job = req.body.job;
  let tagsData = req.body.tagsData;
  let jobData = null;

  Job.findOne({
    where: {
      id: job.id
    }
  })
  .then((foundJob) => {
    jobData = foundJob;
    console.log('the data from the request:', tagsData);
    return Tag.findOrCreate({ 
      where: { name: tagsData }
    });
  })
  .spread((tag, created) => {
    // console.log('the tag is:', tag);
    console.log('the tag is new:', created);
    return tag.addJob(jobData);
  })
  .then(() => {
    res.end();
  })
  .catch((err) => {
    console.log('Error creating tag:', err);
  });
  //Loop through array of tags
}

export default { addJobTags }
