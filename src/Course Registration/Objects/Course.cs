//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Course_Registration
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Course.
    /// </summary>
    // *** Start programmer edit section *** (Course CustomAttributes)

    // *** End programmer edit section *** (Course CustomAttributes)
    [AutoAltered()]
    [Caption("Choosing Courses")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("CourseE", new string[] {
            "CourseType as \'Course type\'"})]
    [View("CourseL", new string[] {
            "CourseType as \'Course type\'"})]
    public class Course : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Course_Registration.tCourseType fCourseType;
        
        private string fName;
        
        // *** Start programmer edit section *** (Course CustomMembers)

        // *** End programmer edit section *** (Course CustomMembers)

        
        /// <summary>
        /// CourseType.
        /// </summary>
        // *** Start programmer edit section *** (Course.CourseType CustomAttributes)

        // *** End programmer edit section *** (Course.CourseType CustomAttributes)
        public virtual IIS.Course_Registration.tCourseType CourseType
        {
            get
            {
                // *** Start programmer edit section *** (Course.CourseType Get start)

                // *** End programmer edit section *** (Course.CourseType Get start)
                IIS.Course_Registration.tCourseType result = this.fCourseType;
                // *** Start programmer edit section *** (Course.CourseType Get end)

                // *** End programmer edit section *** (Course.CourseType Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Course.CourseType Set start)

                // *** End programmer edit section *** (Course.CourseType Set start)
                this.fCourseType = value;
                // *** Start programmer edit section *** (Course.CourseType Set end)

                // *** End programmer edit section *** (Course.CourseType Set end)
            }
        }
        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Course.Name CustomAttributes)

        // *** End programmer edit section *** (Course.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Course.Name Get start)

                // *** End programmer edit section *** (Course.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Course.Name Get end)

                // *** End programmer edit section *** (Course.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Course.Name Set start)

                // *** End programmer edit section *** (Course.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Course.Name Set end)

                // *** End programmer edit section *** (Course.Name Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "CourseE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View CourseE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("CourseE", typeof(IIS.Course_Registration.Course));
                }
            }
            
            /// <summary>
            /// "CourseL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View CourseL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("CourseL", typeof(IIS.Course_Registration.Course));
                }
            }
        }
    }
}
