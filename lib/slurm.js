function scontrol() {
  //scontrol  show  job - dd

  var out = function (data) {
    //console.log(`stdout:\n${data}`);
    var all = data.toString().split('\n');
    console.log(all);
    //JobId=631611 JobName=1760_LIB20878_LDI18217_TTAGGC_L002_R1.fastq.gz_1760_LIB20878_LDI18217_TTAGGC_L002_R2.fastq.gz_run.sh
    //UserId=guptay(10788) GroupId=sl(2006)
    //Priority=1 Nice=0 Account=tsl QOS=normal
    //JobState=PENDING Reason=Resources Dependency=(null)
    //Requeue=0 Restarts=0 BatchFlag=1 Reboot=0 ExitCode=0:0
    //DerivedExitCode=0:0
    //RunTime=00:00:00 TimeLimit=12:00:00 TimeMin=N/A
    //SubmitTime=2016-04-04T18:14:31 EligibleTime=2016-04-04T18:14:31
    //StartTime=2016-04-07T14:31:10 EndTime=Unknown
    //PreemptTime=None SuspendTime=None SecsPreSuspend=0
    //Partition=tsl-medium AllocNode:Sid=v0558:27504
    //ReqNodeList=(null) ExcNodeList=(null)
    //NodeList=(null) SchedNodeList=t128n31
    //NumNodes=1-1 NumCPUs=1 CPUs/Task=1 ReqB:S:C:T=0:0:*:*
    //Socks/Node=* NtasksPerN:B:S:C=0:0:*:* CoreSpec=*
    //MinCPUsNode=1 MinMemoryNode=12000M MinTmpDiskNode=0
    //Features=(null) Gres=(null) Reservation=(null)
    //Shared=OK Contiguous=0 Licenses=(null) Network=(null)
    //Command=./1760_LIB20878_LDI18217_TTAGGC_L002_R1.fastq.gz_1760_LIB20878_LDI18217_TTAGGC_L002_R2.fastq.gz_run.sh
    //WorkDir=/usr/users/sl/guptay/trimmomatic/24h1
    //StdErr=/usr/users/sl/guptay/trimmomatic/24h1/slurm.%N.631611.err
    //StdIn=/dev/null
    //StdOut=/usr/users/sl/guptay/trimmomatic/24h1/slurm.%N.631611.out
    //  TODO INCLUDES NEW LINE, even on last


  };
  var err = function (data) {
    console.log(`stderr:\n${data}`);
  };
  var close = function (code) {
    console.log(`child process exited with code ${code}`);
  };

  run('scontrol', ['show', 'job', '-dd'], out, err, close);


}


function run(command, args, out, err, close) {


  var spawn = require('child_process').spawn;
  var proc = spawn(command, args);

  proc.stdout.on('data', out);

  proc.stderr.on('data', err);

  proc.on('close', close);
}

module.exports = {
  scontrol: scontrol
};