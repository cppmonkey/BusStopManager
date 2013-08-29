BusStopManager
==============

Bus stop screen manager. A portable and lightweight management tool for managing multiple displays within a distribution centers.

Rather than having an expensive central server broadcasting monitor signals through ethernet.
For a similar price to an Ethernet to VGA adaptor, each monitor will have a Raspberry Pi attacked.
The use of individual 'micro pcs' eliminates the requirement for expensive graphics cards capable of providing video feed to multiple displays. An example would be the Matrox M9188, two are required to drive only 16 monitors, whilst costing £1,149.74 each! That doesn't even include the server and software required. But lets face it, thats a whole lot of pi!

Whilst limited to 16 displays per server. A network of Raspberry Pi's have no such limit and could be control from any network enabled device. With the use of Raspbian, Lighttpd, PHP and MySQL. These little devices are very capable of hosting websites and with AJAX enabling communication between clients and a central master Raspberry Pi.
As the Raspberry Pi's operate from SD cards, the kind you typically find in a digital camera. The storage is easily removed and replace if re-imaging them doesn't resolve the fault. Even in the event of hardware failure, they are widely available. This keeps downtime to a minimum. In the worse case scenario the master Pi fails the other Pi's can still be accessed to alter their display information. Any of the other Pi's can be configured to replace the defunct master Pi, thus keeping downtime to an absolute minimum.
